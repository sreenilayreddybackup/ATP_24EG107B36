import {Schema , model} from 'mongoose'

const userSchema = new Schema({
    firstName:{
        type:String,
        required:[true,'first name is required']

    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"email already existed"]
    },
    password:{
        type:String,
        required:[true,"password required"],
    },
    role:{
        type:String,
        enum:["USER","AUTHOR","ADMIN"],
        required:[true,"{Value} is an Invalid role"]
    },
    profileImageUrl:{
        type:String
    },
    isUserActive:{
        type:Boolean,
        default:true
    }
},
    {
        timestamps:true,
        versionKey:false,
        strict:"throw"
    },
);

export const UserModel = model("user", userSchema)