import type { Request, Response } from "express";
import User from "../models/user.model.js";
import { signupSchema } from "../validation/userValidation.js";
import bcrypt from "bcrypt";

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
            password: hashedPassword
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not created"
            });
        };

        return res.status(201).json({
            success: true,
            message: "User Created Successfully",
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


