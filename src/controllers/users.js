const { UsersModel } = require("../models");

const getUsers = async (req, res) => {
  const users = await UsersModel.find({});
  res.json({ users });
};

const getUser = async (req, res) => {
  const user = await NotesModel.findById(req.params.id);
  res.json({ user });
};

const createUsers = async (req, res) => {
  const { body } = req;
  const users = await UsersModel.create(body);
  res.send({ users });
};

const deleteUsers = async (req, res) => {
  const users = await UsersModel.findByIdAndDelete(req.params.id);
  res.json({ users });
};

const updateUsers = async (req, res) => {
  const { username } = req.body;
  await UsersModel.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      username,
    }
  );
  res.json({ message: "User Updated" });
};

module.exports = { getUsers, getUser, createUsers, deleteUsers, updateUsers };
