const express=require('express')
const mongoose=require('mongoose')
const UserSchema=require('./models/User')
const User = require('./models/User')

const app=express()
const PORT=3000
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to the session")
})
app.post('/register',async(req,res)=>{
const {username,email,password}=req.body
try{
 const hashedPassword=await bcrypt.hash(password,10)
 const user=new User({username,email,password,hashedPassword})
 await user.save()
 res.json({message:"User Registered.."})
 console.log("User Registration Completed")


}
catch(err){
    console.log(err)
}

})

mongoose.connect("mongodb+srv://mongodb123:mongodb123@cluster0.3wgmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
()=>{console.log("DB connected successfully")}
).catch(
    (err)=>console.log(err)
)
app.listen(PORT,(err) =>{
    if(err){
    console.log(err)
}
console.log("Server is running on:"+PORT)})