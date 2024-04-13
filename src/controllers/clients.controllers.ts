import { Request, Response } from "express";
import { db } from "../db/db";
import { clients } from "../db/schema";
import { eq, sql } from "drizzle-orm";


export const addClients = async (req:Request, res:Response) => {
    const { name, phone, debt, datedebt, nodebt, quote, totaldebt, totalquote, datequote} = req.body

    /* This is how the json show a new client with a debt.
    {
        "id": 1,
        "name":"Juan",
        "phone": 434381074,
        "debt": 100000,
        "date": "13-04-2024",
        "nodebt": true, this are going to be boolen when is false the client dosent have any debt but in the future will get one.
        "quote": 0,
        "totaldebt": 100000, is the rest of the column quote - debt coz the client can get multiple debts
        "totalquote": 0, this column change when the client give us money to pay the debt
    }

    Second json.

    {
        "id": 1,
        "name": "Juan",
        "phone": 434381074,
        "debt": 100000,
        "date": 13-04-2024,
        "nodebt": true,
        "quote": 50000,
        "totaldebt": 50000 
    }
     */
    try {
        const result = await db.insert(clients).values({name, phone, debt, datedebt, nodebt, quote, totaldebt, totalquote, datequote})
        return res.json({
            result
        })
    } catch (error) {
        console.log(error);
    }
}

export const getClients = async (req:Request, res:Response) => {
    try {

        const result = await db.select({ clients }).from(clients)
        
        return res.json({
            result
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

export const updateClientsQuote = async (req: Request, res: Response) =>{
    let {  id, quote } = req.body
    try { 
        const updateQuote = await db.update(clients)
        .set({ quote: quote })
        .where(eq(clients.id, id));

        res.json({updateQuote})

        if ( quote < 0){
            const updateTotalDebt = await db.update(clients)
            .set({ totaldebt: sql<number>`${clients.debt} - ${clients.datequote} `  })
            .where(eq(clients.id, id));
    
            console.log(updateTotalDebt);
        }
        
    } catch (error) {
        console.log(error);
    }
}


