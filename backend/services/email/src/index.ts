import express, {  type Request , type Response } from "express" ;
import startServer from "./lib/startServer.js";

const app = express() ;

app.get("/" , (req:Request , res:Response)=>{
    res.send("tesing app running of email service")
}) ;


startServer(app) ; 
