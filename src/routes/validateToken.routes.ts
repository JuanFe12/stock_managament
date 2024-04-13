import { Request, Response, NextFunction } from 'express'

const validateToken = (req:Request, res:Response, next:NextFunction) =>{
    const headerToken = req.headers['authorization']
    
    if(headerToken != undefined){
        next();
    }else{
        res.status(400).json({
            error: 'Access declined'
        })
    }
    
}

export default validateToken