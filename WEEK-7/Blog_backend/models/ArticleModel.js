import { Schema,model,Types} from 'mongoose';

const commentSchema = new Schema({
    user:{
        type:Types.ObjectId,
        ref:"user",
        required:[true,"user id required"]
    },
    comment :{
        type:String,
    },
});

const articleSchema = new Schema({
     author:{
        type:Types.ObjectId,     // it is objectid of the string
        ref:"user",
        required:[true,"author id is required"]
     },
     title:{
        type:String,
        required:[true,"title is required"],
     },
     category:{
        type:String,
        required:[true," Category  is required"],
        
     },
     content:{
        type:String,
        required:[true,"content is required"],
     },
     comments:[{ type: commentSchema, default:[]}],
     isArticleAcive:{
        type:Boolean,
        default:true
     },
},
{
    versionKey:false,
    timestamps:true,
    strict:"throw"
}
);
  
export const ArticleModel = model("article", articleSchema)
// create article model