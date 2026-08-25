import type { Request, Response } from "express";
import User from "../models/user.model.js";
import { signinSchema, signupSchema } from "../validation/userValidation.js";
import bcrypt from "bcrypt";
import ENV_SECRETS from "../lib/Secrets.js";
import { generateToken } from "../lib/jwt.js";
import { AUTH_COOKIE_NAME, AUTH_COOKIE_OPTIONS } from "../config/cookie.js";
import generaeteOtp from "../lib/generateOtp.js";
import redis from "../config/connectRedis.js";
import { otpSchema } from "../validation/otpValidation.js";

// 1. signup 2. login 3. logout using jwt these i want 

const SALT_ROUNDS = 12;

export async function UserSignUp(req: Request, res: Response) {

    const userData = signupSchema.safeParse(req.body);

    if (!userData.success) {
        return res.status(400).json({
            success: false,
            message: "Invalid Credentials",
            error: userData.error.flatten()
        });
    };

    const { username, email, password } = userData.data;

    try {

        const checkUser = await User.findOne({
            email
        });

        if (checkUser && checkUser.isEmailVerified) {
            return res.status(409).json({
                success: false,
                message: "Email already exists. Please use another email."
            })
        };

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            isEmailVerified: false
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not created"
            });
        };

        const userOtp = generaeteOtp();
        const otpHash = await bcrypt.hash(userOtp, SALT_ROUNDS);

        await redis.set(

            `otp:${user.email}`,
            otpHash,
            "EX", 300

        )

        const emailResponse = await fetch(ENV_SECRETS.OTP_SERVICE_URL as string, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "SEND_OTP",
                to: user.email,
                data: {
                    name: user.username,
                    otp: userOtp
                }
            })
        });

        if (!emailResponse.ok) {
            throw new Error(
                `OTP service failed: ${emailResponse.status}`
            );
        };

        return res.status(202).json({
            success: true,
            message: "OTP Email Sent Successfully",
            data: {
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server Error"
        });
    };
};

export async function UserSignIn(req: Request, res: Response) {

    const parsedData = signinSchema.safeParse(req.body);

    if (!parsedData.success) {
        return res.status(400).json({
            success: false,
            message: "Invalid Credentials",
            error: parsedData.error.flatten()
        });
    };

    const { email, password } = parsedData.data;

    try {

        const checkUser = await User.findOne({
            email
        });

        if (!checkUser) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        };

        const comparePassword = await bcrypt.compare(password, checkUser.password as string);

        if (!comparePassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        };

        const token = generateToken(checkUser.id);

        res.cookie(AUTH_COOKIE_NAME, token, AUTH_COOKIE_OPTIONS);

        return res.status(200).json({

            success: true,
            message: "User SignIn Success",
            data: {
                name: checkUser.username,
                email: checkUser.email
            }

        });

    } catch (error) {

        console.error(error)

        return res.status(500).json({

            success: false,
            message: "Internal server error"
        });
    };

};

export async function UserSignOut(req: Request, res: Response) {

    try {

        res.clearCookie(AUTH_COOKIE_NAME, AUTH_COOKIE_OPTIONS);

        return res.status(200).json({
            success: true,
            message: "User SingOut Success"
        });

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    };

};

export async function GetUserDetails(req: Request, res: Response) {

    if (!req.userId) {

        return res.status(400).json({
            success: false,
            message: "Invalid User"
        });
    };

    try {

        const user = await User.findById(req.userId);

        if (!user) {

            return res.status(400).json({
                success: false,
                message: "User Does Not Found"
            });
        };

        return res.status(200).json({
            success: true,
            message: "User Details Fetched",
            data: {
                name: user.username,
                email: user.email
            }
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    };

};

export async function VerifyOTP(req: Request, res: Response) {

    const parsedData = otpSchema.safeParse(req.body);

    if (!parsedData.success) {
        return res.status(400).json({
            success: false,
            message: "Invalid Credentials",
            error: parsedData.error.flatten()
        });
    };

    const { email, otp } = parsedData.data;

    try {

        const userOtp = await redis.get(`otp:${email}`); //This is the otp that is in the redis db. 

        if (!userOtp) {

            return res.status(400).json({
                success: false,
                message: "Otp is not present"
            });
        };

        const compareOtp = await bcrypt.compare(otp, userOtp)

        if (!compareOtp) {

            return res.status(400).json({
                success: false,
                message: "Invalid Otp"
            });
        };



        const updateUser = await User.findOneAndUpdate(
            {
                email,
                isEmailVerified: false
            },

            {
                $set: {
                    isEmailVerified: true
                }
            },
            {
                new: true
            }

        );

        if (!updateUser) {
            return res.status(400).json({
                success: false,
                message: "User Does not updated"
            });
        };

        await redis.del(`otp:${email}`);

        const emailResponse = await fetch(ENV_SECRETS.EMAIL_SERVICE_URL as string, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                type: "WELCOME_EMAIL",
                to: updateUser.email,
                data: {
                    name: updateUser.username
                }
            })
        });


        if (!emailResponse.ok) {
            console.error(
                `Welcome email service failed: ${emailResponse.status}`
            );
        }

        return res.status(200).json({
            success: true,
            message: "Email verified successfully"
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    };

};
