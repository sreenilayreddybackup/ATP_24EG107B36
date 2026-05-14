
import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import { hash, compare } from 'bcryptjs'
import { config } from 'dotenv'
import jwt from 'jsonwebtoken'

config()

const { sign } = jwt

// create router object
export const commanApp = exp.Router()

// router for user registration
commanApp.post("/users", async (req,res)=>{

    // define allowed roles for registration
    let allowedRoles = ["USER","AUTHOR"]

    // get user data from request body
    const newUser = req.body

    // check if role provided by user is valid
    // if role is not in allowedRoles array, send error response
    if(!allowedRoles.includes(newUser.role)){
        return res.status(400).json({message:"Invalid role"})
    }

    // hash the password before storing it in database
    newUser.password = await hash(newUser.password,12)

    // create a new user document using mongoose model
    const newUserDoc = new UserModel(newUser)

    // save the user document into MongoDB
    await newUserDoc.save()

    // send success response after user is stored
    res.status(201).json({message:"User created successfully"})
})


// login router     --- adding the token
commanApp.post("/login", async (req,res)=>{

    // roles accepted to login
    const allowedRolesToLogin = ["USER","AUTHOR","ADMIN"]

    // get user credentials from request
    const {email,password} = req.body

    // find the user by email
    const user = await UserModel.findOne({email:email})

    // if user not found
    if(!user){
        return res.status(400).json({message:"Invalid email"})
    }

    // check if role is allowed to login
    if(!allowedRolesToLogin.includes(user.role)){
        return res.status(403).json({message:"Access denied"})
    }

    // compare entered password with hashed password in DB
    const isMatched = await compare(password,user.password)

    // if password not matched
    if(!isMatched){
        return res.status(400).json({message:"Invalid password"})
    }

    // create JWT token using email and role
    const signedToken = sign(
        {email:email, role:user.role},
        process.env.SECRET_KEY
    )

    // set token as httpOnly cookie (cannot be accessed by JS)
    res.cookie("token", signedToken, {
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })

    // remove password from user object before sending response
    const userObj = user.toObject()
    delete userObj.password

    // send login success response
    res.status(200).json({
        message:"login success",
        payload:userObj
    })
})

// logout router    --- remove the token  // server side has access to the logout token

commanApp.get('/logout',(req,res)=>{           // find out why async is not used ???
    // delete the token from cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
    });
    // send res
    res.status(200).json({message:"logout done"})
})


commanApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
    // check current password and new password are same
  // get current password of user/admin/author
  //check the current password of req and user are not same
  // hash the password
  // replace current password of user with hashed new password
  // save
  // send the response

})
