import type { Express } from "express";
import ENV_SECRETS from "./SECRETS.js";

export default function startServer(app: Express) {

    const port = ENV_SECRETS.PORT || 4002;


    const server = app.listen(port, () => {
        console.log(`Email Service Server is running on port ${port}`);
    });

    server.on("error", (error) => {
        console.error("Error in Email Service Server", error);
        process.exit(1);
    });
};