const { NotesModel } = require("../models");

const getNotes = async (req, res) => {
  const notes = await NotesModel.find({});

  res.json({ notes });
};

const getNote = async (req, res) => {
  const note = await NotesModel.findById(req.params.id);
  res.json({ note });
};

const createNotes = async (req, res) => {
  const { body } = req;
  console.log(body);
  const notes = await NotesModel.create(body);
  res.send({ notes });
};

const deleteNotes = async (req, res) => {
  const notes = await NotesModel.findByIdAndDelete(req.params.id);
  res.json({ notes });
};

const updateNotes = async (req, res) => {
  const { title, content, author } = req.body;
  await NotesModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      author,
      content,
    }
  );
  res.json({ message: "Note updated" });
};
module.exports = { getNotes, createNotes, getNote, deleteNotes, updateNotes };
