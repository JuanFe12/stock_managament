import { Request, Response } from "express";
import { db } from "../db/db";
import { suppliers } from "../db/schema";

export const addSuppliers = async (req:Request, res:Response) => {
    const { name, phone, direction } = req.body

    try {
        const result = await db.insert(suppliers).values({name, phone, direction})
        return res.json({
            result
        })
    } catch (error) {
        console.log(error);
    }
}

export const getSuppliers = async (req:Request, res:Response) => {
    try {
        const result = await db.select({ suppliers }).from(suppliers)
        
        return res.json({
            result
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
