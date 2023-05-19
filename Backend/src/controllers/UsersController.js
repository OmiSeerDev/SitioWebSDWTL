const express = require("express");
const createUser = require("../services/UsersService");
const deleteUser = require("../services/UsersService");
const router = new express.Router();
router.post("/", async (req, res) => {
  const { body } = req;

  const user = await createUser(body);

  return res.json(user.map);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await deleteUser(id);

  return res.json(user.map);
});

module.exports = router;
