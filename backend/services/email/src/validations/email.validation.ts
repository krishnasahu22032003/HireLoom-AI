import z from "zod" ; 

const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email("Invalid email address")
  .max(254, "Email cannot exceed 254 characters");