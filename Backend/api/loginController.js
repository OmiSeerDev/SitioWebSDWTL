import { app } from "../server.js";
import { dbConnect } from "./dbConnector.js";

export const login = () => {
  app.get("/login", (req, res) => {
    const user = dbConnect.db.findOne({
      where: { email: "omarmtinajero@gmail.com" },
    });
    res.send("Success" + user);
  });
};
