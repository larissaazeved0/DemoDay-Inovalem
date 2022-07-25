const express = require("express");
const router = express.Router();
const { Users }= require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware")

const {sign} = require('jsonwebtoken');
const { create } = require("handlebars");

router.post("/", validateToken, async (req, res) => {
    const { senha } = req.body;
    const email = req.user.email;
    const user = await Users.findOne({ where: { email: email }});

    bcrypt.compare(senha, user.senha).then((match) => {
        if (!match) return res.json({error: "senha incorreta"})
    });
});


module.exports = router; 