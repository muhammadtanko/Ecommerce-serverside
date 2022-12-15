require("./Connection/db_connection")();
const express = require("express");
const cors = require("cors");
const orderRoute = require("./order.routes")();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1/orders", orderRoute);

// app.get("/", (req, res) => {
//     res.status(200).json({ ok: true, msg: "orders is online" });
// });

app.listen(3003, () => {
    console.log("orders server listening on port 3003")
});