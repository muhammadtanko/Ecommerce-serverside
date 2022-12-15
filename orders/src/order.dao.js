const orderModel = require("./orders.model");

class OrderDao {

    constructor() {

    }
    // create order
    async createorder(obj) {
        let order = new orderModel({
            name: obj.name,
            user_id: obj.user_id,
            category: obj.category,
            quantity: obj.quantity,
            price: obj.price
        });
        let result = await order.save();
        return result;

    }

    // get order
    async getOrder(id) {
        let result = await orderModel.findById(id);
        return result;
    }
    // get all orders
    async getOrders() {
        let result = await orderModel.find();
        return result;
    }
    // edit order
    async editOrder(id, obj) {
        let {name,user_id,category,quantity,price} = obj;
        let result = await orderModel.findByIdAndUpdate({ _id: id }, { $set: { name,user_id,category,quantity,price} });
        return result;
    }
    // delete order
    async deleteOrder(id) {
        let result = await orderModel.findByIdAndDelete(id);
        return result;
    }

}

module.exports = new OrderDao();
