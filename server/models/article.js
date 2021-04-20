import mongoose from "mongoose";

const articleSchema = mongoose.Schema({
  title: String,
  description: String,
  linkToArticle: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ArticleSchema = mongoose.model("ArticleSchema", articleSchema);

export default ArticleSchema;
