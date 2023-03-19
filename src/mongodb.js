const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginFormData")

.then(()=>{
    console.log("mondb connected")

})
.catch(()=>{
    console.log("failed to connect")
})
const LogInSchema = new mongoose.Schema({

name:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
}






})

const collection = new mongoose.model("LoginFormCollection", LogInSchema)

module.exports = collection