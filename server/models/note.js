import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const NoteSchema = mongoose.model("NoteSchema", noteSchema);

export default NoteSchema;
