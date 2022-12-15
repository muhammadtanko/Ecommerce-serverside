require("./Connection/db_connection")();
const express = require("express");
const cors = require("cors");
const usersRoute = require("./user.routes")();

const app = express();
app. use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1/users",usersRoute);


app.listen(3001,()=>{
    console.log("users server listening on port 3001")
})