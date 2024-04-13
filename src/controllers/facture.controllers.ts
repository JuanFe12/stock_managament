import { Request, Response } from "express";
import { db } from "../db/db";
import { outProductsTwo, products } from "../db/schema";
import { eq, sql } from "drizzle-orm";


export const getFacture= async (req:Request, res:Response) => {
    try { 
        const result2 = await db.select({
            nrofactura: outProductsTwo.nrofactura, 
            date: outProductsTwo.date, 
            quantitySell: outProductsTwo.quantity, 
            productId: products.id, 
            name: products.name,
            priceUnit: products.priceUnit,
            quantityInStock: products.quantity,
            totalPrice: sql<number>`${outProductsTwo.quantity} * ${products.priceUnit}`,
            productInStock: sql<number>`${products.quantity} -  ${outProductsTwo.quantity}`
        })
        .from(outProductsTwo)
        .leftJoin(products, eq(outProductsTwo.productsId, products.id))

        
        res.json(result2)

    } catch (error) {
        console.log(error);
    }
}
