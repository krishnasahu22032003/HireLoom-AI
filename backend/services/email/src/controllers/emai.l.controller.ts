import type { Request, Response } from "express";
import { WelcomeEmailSchema } from "../validations/email.validation.js";
import emailQueue from "../queues/email.queue.js";

export async function EmailService(req: Request, res: Response) {

    try{

    const emailData = WelcomeEmailSchema.safeParse(req.body);

    if (!emailData.success) {
        return res.status(400).json({
            success: false,
            message: "Invalid Email "
        });
    };

    const { to , type , data } = emailData.data  ;
    
    const job = await emailQueue.add(type , {
        to ,
        data
    }) ;

const counts = await emailQueue.getJobCounts(
    "waiting",
    "active",
    "completed",
    "failed"
);

console.log("Email job added:", {
    id: job.id,
    name: job.name,
    data: job.data,
});

console.log("Queue counts:", counts);

    return res.status(202).json({
        success:true,
        message:"Task added in the queue",
        jobId : job.id
    });

    }catch(error){
        console.error("Failed to queue email:", error);
        return res.status(500).json({
            success:false,
            message:"Internal Server error"
        });

    };

}; 


