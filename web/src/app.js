let path = require("path");
const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"views")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"))
})
app.listen(3000, () => {
    console.log("server listening on port 3000")
});