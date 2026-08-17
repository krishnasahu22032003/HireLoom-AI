import { type Response } from "express";

export default function healthCheck(res: Response) {

    return res.status(200).json({
        success: true,
        message: "Email Service is healthy and running"
    });

};