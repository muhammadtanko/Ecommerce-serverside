const mongoose = require("mongoose");


module.exports = async () => {
    let dbconnection = mongoose.connection;
    dbconnection
        .on("connected", () => {
            console.log("connected to mongo");
        })
        .on("error", (err) => {
            console.log("error connecting to mongo",err.message);
        })
        .on("disconnected", () => {
            setTimeout(async()=>{
                await mongoose.connect("mongodb://mgdb:27017/ecommercedatabase")
            },5000)
        })
    await mongoose.connect("mongodb://mgdb:27017/ecommercedatabase");
};