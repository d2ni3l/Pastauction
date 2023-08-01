import path from 'path'
import {z} from 'zod'




export const registerSchema = z.object({
    email: z.string().email(),
    first_name : z.string().min(3).max(255),
    password: z.string().min(6).max(255),
    user_category: z.number(),
    gender: z.string(),
    surname: z.string(),
    country: z.string(),
    nickname: z.string(),
    vat: z.string(),
    address: z.string(),
    city: z.string(),
    phone: z.string(),
    birthdate: z.string()
    


})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(255)
})

export const forgotPasswordSchema = z.object({
    email: z.string().email()
})

export const confirmIdentitySchema = z.object({
    password: z.string().min(3).max(6)
})

export const checkEmail = z.object({
    code: z.string().min(3).max(6)
})

export const newPassword = z.object({
    password: z.string().min(6).max(255),
    confirm: z.string().min(6).max(255)
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
});


export const completeProfile = z.object({
   
    
    image: z.string(),
    mr: z.string().min(6).max(255),
    firstname: z.string().min(3),
    surname: z.string().min(3),
    date: z.string(),
    country: z.string(),
    city: z.string()
})



