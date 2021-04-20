import mongoose from "mongoose";

const photoSchema = mongoose.Schema({
  selectedFile: String,
});

const PhotoSchema = mongoose.model("PhotoSchema", photoSchema);

export default PhotoSchema;
