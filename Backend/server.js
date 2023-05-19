import dotenv from "dotenv";
import { dbConnect } from "./api/dbConnector.js";
import express from "express";
import { login } from "./api/loginController.js";

export let app = express();
async function main() {
  dotenv.config();
  try {
    const port = "1331";
    app.listen(port, "localhost", () => {
      console.info(`Server running in port ${port}`);
    });

    app.get("/health", (req, res) => {
      res.send("Server healthy");
      console.log("Health get received");
      dbConnect();
    });
    login();
  } catch (error) {
    throw new error();
  }
}
main().catch(console.error);
