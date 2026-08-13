import express, { type Request, type Response } from "express" ;
import { startServer } from "./lib/startServer.js";

const app = express() ;

app.use(express.json()) ;

app.get("/check" , (req : Request , res:Response)=>{

res.send("testing from auth service")

})


startServer(app) ;
