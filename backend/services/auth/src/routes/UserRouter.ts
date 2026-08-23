import express from "express" ; 
import { UserSignIn, UserSignOut, UserSignUp } from "../controllers/user.controller.js";

const UserRouter = express.Router() ; 

UserRouter.post( "/signup", UserSignUp) ;
UserRouter.post( "/signin", UserSignIn) ;
UserRouter.post( "/signout", UserSignOut) ;


export default UserRouter ; 