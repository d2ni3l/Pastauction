import {z} from 'zod'



export const garageSchema = z.object({
     name : z.string().min(3).max(255),
    country: z.string(),
    description: z.string(),
    vehicle_capacity: z.number(),
    photo: z.string(),
    


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




export const vehiclesDetailsSchema = z.object({
    mileage: z.string(),
    miles: z.string(),
    original_miles: z.string(),
    locate: z.string(),
    plate_numb: z.string(),
    vin: z.string(),
    permits: z.string(),

})