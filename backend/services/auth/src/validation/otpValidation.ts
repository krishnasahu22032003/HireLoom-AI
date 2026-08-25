import { z } from "zod";

export const otpSchema = z.object({
    email: z
        .string()
        .email("Invalid email address")
        .trim()
        .toLowerCase(),

    otp: z
        .string()
        .regex(/^\d{6}$/, "OTP must be exactly 6 digits")
});