import mongoose from "mongoose";

const musicSchema = mongoose.Schema({
  selectedFile: String, // sprawdzic czy tu tez bedzie string ( biblioteka)
});

const MusicSchema = mongoose.model("MusicSchema", musicSchema);

export default MusicSchema;
