import mongoose from "mongoose";
import ENV_SECRETS from "../lib/Secrets.js";

async function connectDB() {

    const url = ENV_SECRETS.DB_URL;

    try {

        await mongoose.connect(url as string);
        console.log("Connected to Database");

    } catch (error) {

        console.error(error);
        process.exit(1);

    };

};

export default connectDB ; 


