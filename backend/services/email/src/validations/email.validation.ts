import { z } from "zod";

export const WelcomeEmailSchema = z.object({
    type: z.literal("WELCOME_EMAIL"),
    to: z.email(),
    data: z.object({
        name: z.string().min(1),
    }),
});

export const OtpEmailSchema = z.object({
    type: z.literal("OTP_EMAIL"),
    to: z.email(),
    data: z.object({
        name: z.string().min(1),
        otp: z.string().min(4).max(8),
    }),
});


