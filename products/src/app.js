require("./Connection/db_connection")();
const express = require("express");
const cors = require("cors");
const productRoute = require("./product.routes")();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use("/api/v1/products",productRoute);

// app.get("/",(req,res)=>{
//     res.status(200).json({ok:true,msg:"products is online"});
// });

app.listen(3002, () => {
    console.log("products server listening on port 3002 ")
});