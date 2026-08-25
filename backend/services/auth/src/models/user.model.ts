import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    firebaseId: { type: String, required: false, unique: true, sparse: true },
    isEmailVerified:{type:Boolean , required:false ,  default:false },
    credits: { type: Number, default: 150 }


}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User ; 