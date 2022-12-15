const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const usersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true , unique: true},
    address: { type: String, required: true },
    userType:{type: String,required:true,enum:["admin","guest"],default:"guest"},
    password: { type: String, required:true, }
    
});


module.exports = model("users",usersSchema);