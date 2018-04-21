const mongoose= require("mongoose");

//create a mongo db schema and model for db connection

const Sechema= mongoose.Schema;

const userSchema= new Sechema({
    email: String,
    password: String
})

module.exports=mongoose.model("user",userSchema,"users");