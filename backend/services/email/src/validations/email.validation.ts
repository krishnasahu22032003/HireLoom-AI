import { z } from "zod";

export const WelcomeEmailSchema = z.object({
    type: z.literal("WELCOME_EMAIL"),
    to: z.email(),
    data: z.object({
        name: z.string().min(1),
    }),
});