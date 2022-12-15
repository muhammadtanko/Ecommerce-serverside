const { Router } = require("express");
const orderDao = require("./order.dao");
const nodeFetch = require("node-fetch");
const api = new Router();

module.exports = () => {


    api.get("/", async (req, res) => {
        try {
            const orders = await orderDao.getOrders();
            res.status(200).json({ ok: true, payload: orders });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });


    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            const order = await orderDao.getOrder(id);
            res.status(200).json({ ok: true, payload: order });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });


    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let update = req.body;
            result = await orderDao.editOrder(id, update);
            res.status(200).json({ ok: true, payload: update });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }

    });



    api.post("/", async (req, res) => {
        try {
            let newOrder = req.body;
            let { id, quantity } = newOrder;
            let nodetest = await nodeFetch(`http://products:3002/api/v1/products/quantity/${id}`, { method: "PUT", body: JSON.stringify({ id, quantity }), headers: { "content-type": "application/json;charset=UTF-8" } });
            let data = await nodetest.json();
            let { name, category, price } = data.payload;
            let productToBeOrderd = { name, category, quantity, price }
            let orderedProduct = await orderDao.createorder(productToBeOrderd);
            res.status(200).json({ ok: true, payload: orderedProduct });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });

    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id
            const order = await orderDao.deleteOrder(id)
            res.status(200).json({ ok: true, payload: order });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });

    return api;
}




