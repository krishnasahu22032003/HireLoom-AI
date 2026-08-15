import express from "express" ;
import { EmailService } from "../controllers/emai.l.controller.js";

const EmailRouter = express.Router() ; 

EmailRouter.post("/email" ,EmailService ) ;

export default EmailRouter ; 