const productModel = require("./products.model");

class ProductDao {

    constructor() {

    }
    // create product
    async createProduct(obj) {
        let product = new productModel({
            name: obj.name,
            category: obj.category,
            quantity: obj.quantity,
            price: obj.price
        });
        let result = await product.save();
        return result;

    }

    // get product
    async getProduct(id) {
        let result = await productModel.findById(id);
        return result;
    }
    // get all product
    async getProducts() {
        let result = await productModel.find();
        return result;
    }
    // edit product
    async editProduct(id, obj) {
        let { name, category, quantity, price } = obj;
        let result = await productModel.findByIdAndUpdate({ _id: id }, { $set: { name, category, quantity, price } });
        return result;
    }
    // delete product
    async deleteProduct(id) {
        let result = await productModel.findByIdAndDelete(id);
        return result;
    }

    async quantityUpdate(id, quantity) {

        let product = await this.getProduct(id);
        let currentQuantity = product.quantity;
        if (quantity > currentQuantity) {
            return { message: `your request for ${quantity}'units is greater than the current stock.Only ${currentQuantity} is available.` };
        } else if (currentQuantity < 1) {
            return { message: "product is out of stock" };
        } else {
            currentQuantity -= quantity;
        }
        let result = await productModel.findByIdAndUpdate({ _id: id }, { $set: { quantity: currentQuantity } });
        return result;
    }

}

module.exports = new ProductDao();
