import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {ArticleModel} from '../models/ArticleModel.js'
import {verifyToken} from '../middlewares/verifyToken.js'
export const authorApp = exp.Router()
// write the article
authorApp.post("/article",verifyToken("AUTHOR"),async(req,res)=>{
        // get articleobj from client
    const articleObj = req.body     // why we need to verify the auhtor?/

let user = req.user

    // check author
    let author = await UserModel.findById(articleObj.author)
    if(author.email!=user.email){
        return res.status(403).json({message:"you are not authorized"})
    }
    if(!author){
        return res.status(404).json({message:"Invalid author"})
    }
   
    // create article doc
    const articleDoc = new ArticleModel(articleObj);
// save'
await articleDoc.save();

// send res
res.status(201).json({message:"Article published succesfully"})
})

authorApp.get("/article", verifyToken("AUTHOR"), async (req, res) => {
  try {

    // get email from token
    const authorEmail = req.user.email;

    // find user using email
    const author = await UserModel.findOne({ email: authorEmail });

    // get articles written by this author
    const articlesList = await ArticleModel.find({
      author: author._id
    });

    res.status(200).json({
      message: "your articles",
      payload: articlesList
    });

  } catch (err) {
    res.status(500).json({
      message: "error reading articles",
      error: err.message
    });
  }
});
     


///to update an article
authorApp.put("/articles",verifyToken("AUTHOR"), async (req,res)=>{
    // get author id from decoded token
    const authorIdOfToken = req.user?.id;
    console.log(authorIdOfToken)
    // get modifies\d article from client
    const{ articleId, title, category , content} = req.body;
    const modifiedArticle = await ArticleModel.findOneAndUpdate(
        { _id: articleId, author:authorIdOfToken},
        { $set: { title,category,content}},
        { new:true},
    );

    // if either article id or author not correct
    if(!modifiedArticle){
        return res.status(403).json({message:"Not authorized to edit the article"})
        
    }
    // send res
    return res.status(200).json({message:"Article modified",payload:modifiedArticle})
});


  