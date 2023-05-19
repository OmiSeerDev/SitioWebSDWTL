const dotenv = require("dotenv");
const express = require("express");
const HealthController = require("./controllers/HealthController");
const UsersController = require("./controllers/UsersController");
const ProductsController = require("./controllers/ProductsController");
const dbConnector = require("./utilities/dbConnection");
const bodyParser = require("body-parser");

dbConnector.init();
const app = express();
async function main() {
  dotenv.config();
  try {
    app.use(bodyParser.json());
    app.use("/", HealthController);
    app.use("/user", UsersController);
    app.use("/product", ProductsController);
    const port = "1331";
    app.listen(port, "localhost", () => {
      console.info(`Server running in port ${port}`);
    });
  } catch (error) {
    throw new error();
  }
}
main().catch(console.error);
