import { Request, Response } from "express";
import connection from "../db/connection";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { db } from "../db/db";
import { users } from "../db/schema";

export const addUser = async (req:Request, res:Response) => {

    const { name, last_name, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password,10)

    try {
        const result = await db.insert(users).values({ name, last_name, username, password: hashedPassword })

        return res.json({
            result
        })
    } catch (error) {
        console.log(error);
    }

}

export const loginUser = (req:Request, res: Response) => {
    const { username, password } = req.body;

    connection.query(' SELECT * FROM users WHERE username = ' + connection.escape(username), (err, data) => {
        if (err) {
            console.log(err);
        }else{
            if(data.lenght == 0){
                //Dont exist the user
                res.json({
                    msg: "User dosent exist"
                })
            }else{
                const userPassword = data[0].password;

                bcrypt.compare(password, userPassword).then((result) =>{
                    if(result){

                        const token = jwt.sign({
                            username:username
                        }, process.env.SECRET_KEY || 'Developers')
                        res.json({
                            token
                        })
                    }else{
                        res.json({
                            msg: "The password is wrong!"
                        })        
                    }
                })

            }
        }
    })
}