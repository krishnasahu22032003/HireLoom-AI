import jwt from "jsonwebtoken" ;
import ENV_SECRETS from "./Secrets.js";

export function generateToken(userId: string){

return jwt.sign({
    userId
},

ENV_SECRETS.JWT_SECRET as string ,

{expiresIn:"7d"})

};

