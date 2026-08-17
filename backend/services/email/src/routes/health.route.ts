import express from "express" ;
import healthCheck from "../controllers/healthcheck.controller.js";

const HealthRouter = express.Router() ;

HealthRouter.get("/check" , healthCheck) ;

export default HealthRouter ;
