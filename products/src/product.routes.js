const { Router } = require("express");

const productDao = require("./products.dao");
// const productDao = require("../Dao/products.dao")


const api = new Router();

module.exports = () => {


    api.get("/", async (req, res) => {
        try {
            const products = await productDao.getProducts();
            res.status(200).json({ ok: true, payload: products });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });


    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            const product = await productDao.getProduct(id);
            res.status(200).json({ ok: true, payload: product });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });


    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let update = req.body;
            result = await productDao.editProduct(id, update);
            res.status(200).json({ ok: true, payload: update });
        } catch (error) {
            res.status(500).json({ ok: fakse, message: error.message });
        }

    });



    api.post("/", async (req, res) => {
        try {
            let newProduct = req.body;
            let result = await productDao.createProduct(newProduct);
            res.status(200).json({ ok: true, payload: result });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });

    api.put("/quantity/:id", async (req, res) => {
        try {
            let update = req.body;
            let { id, quantity } = update;
            let result = await productDao.quantityUpdate(id, quantity);
            res.status(200).json({ ok:true,payload: result });
        } catch (error) {
            res.status(500).json({ ok:false,message:error.message });
        }
    });

    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id
            const product = await productDao.deleteProduct(id)
            res.status(200).json({ ok:true,payload: product });
        } catch (error) {
            res.status(500).json({ ok:false,message:error.message });
        }
    });

    return api;
}




