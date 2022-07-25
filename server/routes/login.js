const express = require("express");
const router = express.Router();
const { Users }= require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware")

const {sign} = require('jsonwebtoken')

router.post("/", async (req, res) => {
    const { email, senha } = req.body;
    const user = await Users.findOne({ where: { email: email }});
    if (!user) return res.json({error: "Usuário não existe"});
    
    bcrypt.compare(senha, user.senha).then((match) => {
        if (!match) return res.json({error: "senha incorreta"})

        const accessToken = sign({email: user.email, id: user.id},'segredoimportante')
        res.json({token: accessToken, email: email, id: user.id});
    });
});

router.get('/auth', validateToken, (req, res) => {
    res.json(req.user)
})

module.exports = router; 