import {Redis} from "ioredis";
import ENV_SECRETS from "../lib/SECRETS.js";

    
const redis = new Redis(ENV_SECRETS.REDIS_SECRET as string)

redis.on("connect" , ()=>{
    console.log("connect to redis db")
}) ;

redis.on("error", ()=>{
    console.log("Error while connecting to redis db")
});

export default redis ; 