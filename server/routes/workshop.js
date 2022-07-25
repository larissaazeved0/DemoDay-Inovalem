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
    const { nome, email, telefone, data, work } = req.body;

    var into = "INSERT INTO Workshops (nome, email, numero, dataNasc, motivo) VALUES (?,?,?,?,?)"
    var valores = [ nome, email, telefone, data, work]
    db.query(into, valores, (err, result) => {
        console.log(err);
        console.log(result)
    });
});


module.exports = router;