const express = require("express");
const router = express.Router();
const { Users }= require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const { nome, email, senha } = req.body;

    bcrypt.hash(senha, 10).then((hash) => {
        Users.create ({
            nome: nome,
            email: email,
            senha: hash,
            role: "usuario"
        })
    });
});


module.exports = router;