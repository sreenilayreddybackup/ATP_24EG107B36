//create  HTTP server
import exp from 'express'
const app=exp()//variable name to hold the application , a part from name anything can be used by app is used in genral(naming convention)
//exp() internally contain http server + many things

//use body parser middleware
app.use(exp.json())
//set a port number
const port=2903
//assign port number to http server
app.listen(port,()=>console.log(`server listening to port ${port}........`))

//web server is a computer that installed with http server software


//create api(rest api-representational state transfer) , should contain nouns not verbs(user but not read-user)

//api contain routes


//test data (temp once server restarts data deletes from the ram)
let user=[]

    //route to handle get req of a client(http://localhost:2903/user)
    app.get('/user',(req,res)=>{
        res.json({message:"all data",payload:user})
    })//(path,callback(request,responds) fun)
    //route to handle post req of a client
    app.post('/user',(req,res)=>{
        //get new user from client 
        let newuser = req.body
        // push user into users
        user.push(newuser)
        //send res
        res.json({message:"user is created successfully"})
    })
    //route to handle put req of a client
    app.put('/user',(req,res)=>{
        //get modified user from client
        let modifieduser=req.body
        //get index of existing user in user array
        let index=user.findIndex((userobj)=>userobj.id===modifieduser.id)
        //if user not found
        if(index===-1){
            return res.json({message:"user not found"})
        }
        //update user with user
        user.splice(index,1,modifieduser)
        //send res
        res.json({message:"user updated"})
    })
    //route to handle delete req of a client
    app.delete('/user/:id',(req,res)=>{
        //get id of user from url parameter
        let idOfUrl=Number(req.params.id)
       //find index of user
       let dindex=user.findIndex((userO)=>userO.id===idOfUrl)
        //delete user by index
        if(dindex===-1){
            return res.json("user not found")
        }
        user.splice(dindex,1)
        // send res
        res.json({message:"user deleted"})
    })
    //route to find a single user
    app.get('/user/:id',(req,res)=>{
        //get id of user from parameter
        let IDOFURL=Number(req.params.id)
        //find index of user
        let INDEX=user.findIndex((userob)=>userob.id===IDOFURL)
        //display of user
        if(INDEX===-1){
             return res.json("user not found")
        }
        res.json({message:user[INDEX]})
    })



//create  product api with bellow operations
    //create new product({product id,name,brand,price})
    //read all pdt
    //read all products by brand
    //update a pdt
    //delete a pdt


let product=[]
app.get('/pdt',(req,res)=>{
    res.json({message:"all data",payload:product})
})



app.post('/pdt',(req,res)=>{
        //get new user from client 
        let newpdt = req.body
        // push user into users
        product.push(newpdt)
        //send res
        res.json({message:"pdt is added successfully"})
})



    app.put('/pdt',(req,res)=>{
        //get modified pdt from client
        let modifiedpdt=req.body
        //get index of existing user in pdt array
        let index=product.findIndex((pdtobj)=>pdtobj.id===modifiedpdt.id)
        //if user not found
        if(index===-1){
            return res.json({message:"pdt not found"})
        }
        //update user with pdt
        product.splice(index,1,modifiedpdt)
        //send res
        res.json({message:"pdt updated"})
    })



    app.delete('/pdt/:pdtid',(req,res)=>{
        //get id of user from url parameter
        let idOfUrl=Number(req.params.pdtid)
        // console.log(idOfUrl)
       //find index of user
       let dindex=product.findIndex((pdtO)=>pdtO.pdtid===idOfUrl)
    //    console.log(dindex)
        //delete user by index
        if(dindex===-1){
            return res.json("pdt not found")
        }
        product.splice(dindex,1)
        // send res
        res.json({message:"pdt deleted"})
    })


        app.get('/pdt/:brand',(req,res)=>{
        //get brand of user from parameter
        let BRANDOFURL=(req.params.brand)
        // console.log(BRANDOFURL)
        //find index of user
        let BRANDs=product.findIndex(pdt=>pdt.brand==BRANDOFURL)
        //display of user
        // console.log(BRANDs)
        if(BRANDs==-1){
             return res.json("pdt not found")
        }
        res.json({message:product[BRANDs]})
    })


