import { Resend } from "resend";
import ENV_SECRETS from "../lib/SECRETS.js";
import { WelcomeEmailTemplate } from "../templates/welcomeEmailTemplate.js";

const resend = new Resend(ENV_SECRETS.RESEND_API) ;

export async function sendEmail(to : string , name :string) {

const {data , error} =   await resend.emails.send({

from: "HireLoom AI <hireloomAI@krishnastack.com>",
to: to ,
subject: `Welcome to HireLoom AI, ${name}`,
   html:WelcomeEmailTemplate(name),

});

if(error){
  console.error(error.message)
}

return data ;
};