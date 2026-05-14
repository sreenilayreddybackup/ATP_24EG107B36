import exp from 'express'

import { verifyToken } from '../middlewares/verifyToken.js'
import { ArticleModel } from '../models/ArticleModel.js'
export const userApp = exp.Router()

// read articles of all operations
userApp.get("/articles", verifyToken("USER"), async(req,res)=>{
    
    // read articles
    const articlesList = await ArticleModel.find()

    // send response
    res.status(200).json({
        message:"articles",
        payload:articlesList
    })
})

userApp.put("/articles", verifyToken("USER"), async (req, res) => {
  try {
    // get body from request
    const { articleId, comment } = req.body;

    // validate input
    if (!articleId || !comment) {
      return res.status(400).json({ message: "articleId and comment are required" });
    }

    // check article exists and is active
    const articleDocument = await ArticleModel.findOne({ _id: articleId, isArticleAcive: true });

    // if article not found or inactive
    if (!articleDocument) {
      return res.status(404).json({ message: "Article not found or has been removed" });
    }

    // build comment object matching commentSchema
    const commentObj = {
      user: req.user.id,   // ObjectId from decoded token
      comment: comment,
    };

    // push comment into article's comments array
    const updatedArticle = await ArticleModel.findByIdAndUpdate(
      articleId,
      { $push: { comments: commentObj } },
      { new: true }
    );

    res.status(200).json({ message: "Comment added successfully", payload: updatedArticle });

  } catch (err) {
    res.status(500).json({ message: "Error adding comment", error: err.message });
  }
});