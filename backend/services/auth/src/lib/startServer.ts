import type { Express } from "express";
import ENV_SECRETS from "./Secrets.js";
import connectDB from "../config/connectDB.js";

export async function startServer(app: Express) {

  const port = ENV_SECRETS.PORT || 4001;
  
  await connectDB() ;
  const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });

  server.on("error", (error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });

  return server;
};