import express, { type Request , type Response } from "express" ;
import { startServer } from "./lib/startServer.js";
import proxy from "express-http-proxy" ; 
import ENV_SECRETS from "./lib/Secrets.js";

const app = express();

app.use(express.json()) ;

app.use("/api/v1/user/auth", proxy(ENV_SECRETS.AUTH_SERVICE_URL as string) )

startServer(app) ;
