const mongoose = require("mongoose");

const {Schema, model} = mongoose;

const orderSchema = new Schema({
    name: { type: String, required: true },
    user_id: { type: Number },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required:true, }
    
});

module.exports = model("orders",orderSchema);