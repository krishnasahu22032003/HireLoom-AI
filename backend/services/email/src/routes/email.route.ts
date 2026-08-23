import express from "express" ;
import { EmailService, OtpEmail } from "../controllers/email.controller.js";

const EmailRouter = express.Router() ; 

EmailRouter.post("/email-service" ,EmailService ) ;
EmailRouter.post("/otp-service" ,OtpEmail ) ;

export default EmailRouter ; 