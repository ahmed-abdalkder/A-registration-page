
const express = require('express')
const path = require('path')
const cors = require('cors');
const { connectionDB } = require('./db/connection');
const { usermodel } = require('./db/models/usermodel');
 


const app = express()

const port = 3000

app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
 
connectionDB()

app.get('/', async(req, res) =>{

 const user = await usermodel.find({})

  res.render("index.ejs",{user}) 

 });

app.post("/user",async(req,res)=>{

 const{name, email, password} = req.body

await usermodel.create({name, email, password})

 res.redirect("/")

});

app.get("/deleteuser/:id",async(req,res)=>{

 const{ id } = req.params

 await usermodel.findByIdAndDelete({_id: id})

 res.redirect("/")

});

app.get("/edituser/:id",async (req,res)=>{
    
const user = await usermodel.findById( req.params.id)

 res.render("update.ejs",{user})

});

app.post("/updateuser/:id",async(req,res)=>{

 await usermodel.findByIdAndUpdate(req.params.id, req.body)

        res.redirect("/")
});

app.use("*",(req,res)=>{
 res.json("url not found")
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))