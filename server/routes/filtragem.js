const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Workshop } = require("../models");
const mysql = require('mysql2');


const db = mysql.createConnection ({
    user: "root",
    host: "localhost",
    password: "MySQL@2022",
    database: "empresa_inovalem"
})

router.post("/", async (req, res) => {
    const { cpf, genero, dataNasc, holerite } = req.body;
    
    var into = "INSERT INTO filtragens (cpf, dataNasc, genero, comprovante ) VALUES (?,?,?,?)"
    var valores = [ cpf, dataNasc, genero, holerite ]
    db.query(into, valores, (err, result) => {
        console.log(err);
        console.log(result)
    });
});


module.exports = router;