import { Worker  } from "bullmq";
import { sendEmail, sendOTPEmail } from "../config/resendEmail.js";
import redis from "../config/redis.js";


interface EmailJob{

    to  :string,
      data: {
    name: string,
    otp?:string
  };
};


const worker =  new Worker<EmailJob>("email-queue",async (job)=>{

    console.log("JOB RECIEVIED" , job.name) ;
    console.log("JOB RECIEVIED DATA" , job.data) ;

    if(job.name === "WELCOME_EMAIL"){
        await sendEmail(job.data.to , job.data.data.name)
    } ;

    if(job.name === "SEND_OTP"){
        await sendOTPEmail(job.data.to , job.data.data.name , job.data.data.otp as string) ;
    }

},{connection:redis}) ;

worker.on("completed",()=>{
    console.log("Worker is completed")
}) ;

worker.on("error" , (error)=>{
    console.log(error.message)
}) ; 

worker.on("active" ,()=>{
    console.log("Worker is active")
}) ;

console.log("Worker started")