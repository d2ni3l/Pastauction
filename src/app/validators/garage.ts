import {z} from 'zod'



export const garageSchema = z.object({
     garage_name : z.string().min(3).max(255),
    country: z.string(),
    vehicle_desc: z.string(),
    vehicle_capacity: z.string(),
    garage_image: z.string(),
    


})


export const addVehicleSchema = z.object({
    had_before : z.string(),
    year: z.string(),
    family: z.string(),
    variant: z.string(),
    vehicle_type: z.string(),
    doors: z.string(),
    transmission: z.string(),
    power: z.string(),
    driver_side: z.string(),
    exterior_color: z.string(),
    interior_color: z.string(),
    make: z.string(),
model: z.string(),
series: z.string(),
body: z.string(),
engine_capacity: z.string(),
interior_type: z.string(),
originality: z.string(),
status: z.string(),

})