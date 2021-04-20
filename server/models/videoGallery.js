import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  selectedFile: String, // sprawdzic czy tu tez bedzie string ( biblioteka)
});

const VideoSchema = mongoose.model("VideoSchema", videoSchema);

export default VideoSchema;
