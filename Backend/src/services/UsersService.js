const Users = require("../models/Users");
const { ObjectId } = require("mongoose").Types;
const pick = require("../utilities/picker");

const CREATE_USER_FIELDS = [
  "name",
  "email",
  "password",
  "isAdmin",
  "createdAt",
];

const usersService = async (userData) => {
  const pickedParams = pick(userData, CREATE_USER_FIELDS, true);
  const { name, email, password, isAdmin, createdAt } = pickedParams;

  return await new Users({
    name,
    email,
    password,
    isAdmin,
    createdAt,
  }).save();
};

const deleteUser = async (id) => {
  const user = await Users.getById(new ObjectId(id));

  return await user.delete();
};

module.exports = usersService;
module.exports = deleteUser;
