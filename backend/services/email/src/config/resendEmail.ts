import { Resend } from "resend";
import ENV_SECRETS from "../lib/SECRETS.js";

const resend = new Resend(ENV_SECRETS.RESEND_API) ;

export async function sendEmail(to : string , name :string) {

const {data , error} =   await resend.emails.send({

from:"hireloomAI@krishnastack.com",
to: to ,
subject:"Welcome  Email",
   html: `
      <h1>Welcome, ${name}!</h1>
      <p>We're excited to have you with us.</p>
    `,

});

if(error){
  console.error(error.message)
}

return data ;
};