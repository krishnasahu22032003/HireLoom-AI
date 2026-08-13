import express, { type Request, type Response } from "express" ;
import { startServer } from "./lib/startServer.js";
import UserRouter from "./routes/UserRouter.js";

const app = express() ;

app.use(express.json()) ;

app.use("/user" ,UserRouter) ; 
app.use("/health" , ) ; 

startServer(app) ;
