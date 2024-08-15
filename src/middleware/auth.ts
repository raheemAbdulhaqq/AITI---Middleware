import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

const tokenSecret = process.env.TOKEN_SECRET!
const tokenExpiration = "1 day"

export const generateToken = function (payload: any){
    return jwt.sign(payload, tokenSecret, {
        expiresIn: tokenExpiration
    })
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer", "")

    if(!token){
        throw new Error()
    }

    jwt.verify(token, tokenSecret)

    next()
}