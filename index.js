const express = require("express");
const hbs=require('hbs')

const Employee=require("./models/Employee")
const path=require('path')
const bodyParser=require('body-parser')

require("./dbConnect")
const app = express();
const encoder=bodyParser.urlencoded()
app.set("views","./views")
app.set("view engine","hbs")
const partialPath=path.join(__dirname,"./views/partials")
hbs.registerPartials(partialPath)
const staticPath=path.join(__dirname,"./views/public")
app.use(express.static(staticPath))

app.get("/",async(req,res)=>{
    var data=await Employee.find()
    res.render("index",{"data":data})
})
app.get("/add",(req,res)=>{
    res.render("add")
})

app.post("/add",encoder,async(req,res)=>
{
    var data=new Employee(req.body)
    await data.save();
    res.redirect("/")
})

app.get("/delete/:_id",async(req,res)=>
{
    await Employee.deleteOne({_id:req.params._id})
    res.redirect("/")
})

app.get("/update/:_id",async(req,res)=>{
    const data=await Employee.findOne({_id:req.params._id})
    res.render("update",{data:data})
})

app.post("/update/:_id",encoder,async(req,res)=>
{
    var data=await Employee.findOne({_id:req.params._id})
    data.name=req.body.name
    data.age=req.body.age
    data.salary=req.body.salary
    data.email=req.body.email
    data.phone=req.body.phone
    data.desig=req.body.desig
    data.city=req.body.city

    await data.save();
    res.redirect("/")
})

// Server listen

app.listen(3000, () => console.log("Server listening to port 3000"));