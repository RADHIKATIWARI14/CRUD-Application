const mongoose=require('mongoose')
const EmployeesSchema=new mongoose.Schema({
    name:{
        type:String
    },
    age:{
      type:Number,
    },
    salary:{
      type:Number,
      default:30000,
  },
  email:{
    type:String
  },
  phone:{
    type:String
  },
  desig:{
     type:String
  },
  city:{
     type:String,
     default:"noida",
  },

})
const Employee= mongoose.model("Employee",EmployeesSchema)
module.exports=Employee