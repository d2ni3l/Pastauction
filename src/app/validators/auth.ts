import {z} from 'zod'




export const registerSchema = z.object({
    email: z.string().email(),
    name : z.string().min(3).max(255),
    password: z.string().min(6).max(255),
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(255)
})

export const forgotPasswordSchema = z.object({
    email: z.string().email()
})