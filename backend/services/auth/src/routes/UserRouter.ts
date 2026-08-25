import express from "express" ; 
import { GetUserDetails, UserSignIn, UserSignOut, UserSignUp, VerifyOTP } from "../controllers/user.controller.js";

const UserRouter = express.Router() ; 

UserRouter.post( "/signup", UserSignUp) ;
UserRouter.post( "/signin", UserSignIn) ;
UserRouter.post( "/signout", UserSignOut) ;
UserRouter.get( "/me", GetUserDetails) ;
UserRouter.post( "/verify-otp", VerifyOTP) ;


export default UserRouter ; 