const dotenv = require("dotenv");
const express = require("express");
const HealthController = require("./controllers/HealthController");
const UsersController = require("./controllers/UsersController");
const dbConnector = require("./utilities/dbConnector");

dbConnector.init();
const app = express();
async function main() {
  dotenv.config();
  try {
    app.use("/", HealthController);
    app.use("/", UsersController);
    const port = "1331";
    app.listen(port, "localhost", () => {
      console.info(`Server running in port ${port}`);
    });
  } catch (error) {
    throw new error();
  }
}
main().catch(console.error);
