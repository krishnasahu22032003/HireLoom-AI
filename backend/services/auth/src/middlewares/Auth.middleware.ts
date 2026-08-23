import type { NextFunction, Request, Response } from "express";
import { AUTH_COOKIE_NAME } from "../config/cookie.js";
import { verifyToken } from "../lib/jwt.js";

export async function AuthMiddleware(req:Request , res:Response , next:NextFunction){

try{

const token = req.cookies[AUTH_COOKIE_NAME] ; 

if(!token){

    return res.status(401).json({
        success:false,
        message:"Invalid user"
    }) ; 
} ;

const decoded = verifyToken(token) ;

if(!decoded){
    return res.status(401).json({
        success:false,
        message:"Invalid token"
    })
}

req.userId =  decoded.userId ; 

next()

}catch(error){

    return res.status(500).json({
        success:false,
        message:"Internal server error"
    }) ;
}; 

} ;