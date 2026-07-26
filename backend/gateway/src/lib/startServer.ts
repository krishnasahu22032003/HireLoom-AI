import type { Express } from "express";
import ENV_SECRETS from "./Secrets.js";

export function startServer(app: Express) {
  const port = ENV_SECRETS.PORT;

  const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`);
  });

  server.on("error", (error) => {
    console.error("Failed to start server:", error);
    process.exit(1);
  });

  return server;
};