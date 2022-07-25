const express = require("express");
const router = express.Router();
const { Produtos_meses }= require("../models");
const bcrypt = require("bcrypt");

const {sign} = require('jsonwebtoken')

router.get("/:id", async (req, res) => {
    const grafico = await Produtos_meses.findOne({where: {'id': req.params.id}});
    res.json(grafico);
});


module.exports = router;