import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { ArticleModel } from '../models/ArticleModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'

export const adminApp = exp.Router()

// Get all users
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
  try {
    // Fetch all users
    const users = await UserModel.find().select("-password")

    res.status(200).json({
      message: "All users",
      payload: users
    })
  } catch (err) {
    res.status(500).json({
      message: "Error fetching users",
      error: err.message
    })
  }
})

// Get all articles
adminApp.get("/articles", verifyToken("ADMIN"), async (req, res) => {
  try {
    // Fetch all articles (active and inactive)
    const articles = await ArticleModel.find()

    res.status(200).json({
      message: "All articles",
      payload: articles
    })
  } catch (err) {
    res.status(500).json({
      message: "Error fetching articles",
      error: err.message
    })
  }
})

// Delete/Deactivate article
adminApp.delete("/articles/:articleId", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { articleId } = req.params

    // Check if article exists
    const article = await ArticleModel.findById(articleId)
    if (!article) {
      return res.status(404).json({ message: "Article not found" })
    }

    // Deactivate the article
    const deletedArticle = await ArticleModel.findByIdAndUpdate(
      articleId,
      { $set: { isArticleAcive: false } },
      { new: true }
    )

    res.status(200).json({
      message: "Article deactivated successfully",
      payload: deletedArticle
    })
  } catch (err) {
    res.status(500).json({
      message: "Error deleting article",
      error: err.message
    })
  }
})

// Suspend/Deactivate user
adminApp.delete("/users/:userId", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { userId } = req.params

    // Check if user exists
    const user = await UserModel.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Deactivate the user
    const suspendedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: { isUserActive: false } },
      { new: true }
    ).select("-password")

    res.status(200).json({
      message: "User suspended successfully",
      payload: suspendedUser
    })
  } catch (err) {
    res.status(500).json({
      message: "Error suspending user",
      error: err.message
    })
  }
})

// Activate/Unsuspend user
adminApp.put("/users/:userId/activate", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { userId } = req.params

    // Check if user exists
    const user = await UserModel.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Activate the user
    const activatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: { isUserActive: true } },
      { new: true }
    ).select("-password")

    res.status(200).json({
      message: "User activated successfully",
      payload: activatedUser
    })
  } catch (err) {
    res.status(500).json({
      message: "Error activating user",
      error: err.message
    })
  }
})

// Get article details with comments
adminApp.get("/articles/:articleId/comments", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { articleId } = req.params

    // Get article with all comments
    const article = await ArticleModel.findById(articleId)
    if (!article) {
      return res.status(404).json({ message: "Article not found" })
    }

    res.status(200).json({
      message: "Article comments",
      payload: {
        articleId: article._id,
        title: article.title,
        comments: article.comments
      }
    })
  } catch (err) {
    res.status(500).json({
      message: "Error fetching comments",
      error: err.message
    })
  }
})

// Delete comment from article
adminApp.delete("/articles/:articleId/comments/:commentId", verifyToken("ADMIN"), async (req, res) => {
  try {
    const { articleId, commentId } = req.params

    // Find article and remove comment
    const updatedArticle = await ArticleModel.findByIdAndUpdate(
      articleId,
      { $pull: { comments: { _id: commentId } } },
      { new: true }
    )

    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" })
    }

    res.status(200).json({
      message: "Comment deleted successfully",
      payload: updatedArticle
    })
  } catch (err) {
    res.status(500).json({
      message: "Error deleting comment",
      error: err.message
    })
  }
})