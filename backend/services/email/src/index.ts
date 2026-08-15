import express, {  type Request , type Response } from "express" ;
import startServer from "./lib/startServer.js";
import EmailRouter from "./routes/email.route.js";

const app = express() ;

app.use("/api/v1/emails" , EmailRouter) ;

startServer(app) ; 
