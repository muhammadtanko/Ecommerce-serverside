const { Router } = require("express");

const userDao = require("./user.dao");

const api = new Router();

module.exports = () => {

    // get all users
    api.get("/", async (req, res) => {
        try {
            const users = await userDao.getUsers();
            res.status(200).json({ ok: true, payload: users });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });

    // get user
    api.get("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            const user = await userDao.getUser(id)
            res.status(200).json({ ok: true, payload: user });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });

    // update user

    api.put("/:id", async (req, res) => {
        try {
            let id = req.params.id;
            let update = req.body;
            result = await userDao.editUser(id, update);
            res.status(200).json({ ok: true, payload: update });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }

    });


    //  create user

    api.post("/", async (req, res) => {
        try {
            let { name, email, address, userType, password } = req.body;
            let result = await userDao.createUser({ name, email, address, userType, password });
            // console.log("reslt>>",result);
            res.status(200).json({ ok: true, payload: result });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });

    // login
    api.get("/login", (req, res) => {
        res.status(200).json({ ok: true, msg: "login page" });
    })
    api.post("/login", async (req, res) => {
        try {
            let { email, password } = req.body;
            let result = await userDao.login({ email, password });
            res.status(200).json({ ok: true, payload: result })
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    })

    // delete user
    api.delete("/:id", async (req, res) => {
        try {
            let id = req.params.id
            const user = await userDao.deleteUser(id)
            res.status(200).json({ ok: true, payload: user });
        } catch (error) {
            res.status(500).json({ ok: false, message: error.message });
        }
    });


    return api;
}


