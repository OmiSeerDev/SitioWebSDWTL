import { app } from "../app.js";
import { dbConnect } from "../utilities/dbConnector.js";
import express from "express";

const router = new express.Router();

router.get("/login", (req, res) => {
  const user = dbConnect.db
    .findOne({
      where: { email: "omarmtinajero@gmail.com" },
    })
    .then(() => {
      res.send("Success" + user);
    });
});

module.exports = router;
