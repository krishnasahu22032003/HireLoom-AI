import type { Request, Response } from "express";
import User from "../models/user.model.js";
import { signinSchema, signupSchema } from "../validation/userValidation.js";
import bcrypt from "bcrypt";
import ENV_SECRETS from "../lib/Secrets.js";
import { generateToken } from "../lib/jwt.js";
import { AUTH_COOKIE_NAME, AUTH_COOKIE_OPTIONS } from "../config/cookie.js";
import generaeteOtp from "../lib/generateOtp.js";

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

        if (checkUser) {
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
            isEmailVerified:false
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not created"
            });
        };

    const userOtp = generaeteOtp() ;

        await fetch(ENV_SECRETS.OTP_SERVICE_URL as string , {
            method:"POST", 
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                type:"SEND_OTP",
                to:user.email , 
                data:{
                    name:user.username , 
                    otp:userOtp
                }
            })
        })

        return res.status(201).json({
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

export async function GetUserDetails(req: Request, res: Response){

    if(!req.userId){

        return res.status(400).json({
            success:false, 
            message:"Invalid User"
        }) ;
    } ;

    try{

         const user = await User.findById(req.userId) ;

         if(!user){

            return res.status(400).json({
                success:false,
                message:"User Does Not Found"
            }) ;
         }; 

         return res.status(200).json({
            success:true , 
            message:"User Details Fetched",
            data:{
                name:user.username , 
                email:user.email
            } 
         });

    }catch(error){

         console.error(error) ;

        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    };

};

