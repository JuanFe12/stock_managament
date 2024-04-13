import { Request, Response } from "express";
import { db } from "../db/db";
import { outProductsTwo, products } from "../db/schema";
import { eq } from "drizzle-orm";


export const getProducts = async (req:Request, res:Response) => {
    try {

        const result = await db.select({ products }).from(products)
        
        return res.json({
            result
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const addProducts = async (req:Request, res:Response) => {
    const { id, name, priceUnit, quantity} = req.body

    const totalStockValue = priceUnit * quantity;

    try {
        const result = await db.insert(products).values({id: id, name: name, priceUnit: priceUnit, quantity:quantity, totalStockValue})
        return res.json({
            result
        })
    } catch (error) {
        console.log(error);
    }
}

export const outProducts = async (req: Request, res: Response) =>{
      let {nrofactura, date, quantity, products_Id } = req.body;

      let resultid = await db.select({
        id: outProductsTwo.productsId
      }).from(products).leftJoin(outProductsTwo, eq(products.id, outProductsTwo.id))

     
        try {
            const result = await db.insert(outProductsTwo).values({ nrofactura, date, quantity, productsId: products_Id})
            return res.json({
                result
            })
        } catch (error) {
            console.log(error);
        }
}

export const getAllOutProducts = async (req: Request, res: Response) =>{
    let { id } = req.body
    try { 
            const result2 = await db.select({
                nrofactura: outProductsTwo.nrofactura, 
                date: outProductsTwo.date, 
                quantity: outProductsTwo.quantity, 
                productId: products.id, 
                name: products.name
            })
            .from(outProductsTwo)
            .leftJoin(products, eq(outProductsTwo.productsId, products.id))

            res.json(result2)

    } catch (error) {
        console.log(error);
    }
}


export const updateProduct = async (req: Request, res: Response) =>{
    let { name, id } = req.body
    try { 
        const result = await db.update(products)
        .set({ name: name })
        .where(eq(products.id, id));

        res.json({result})

    } catch (error) {
        console.log(error);
    }
}
