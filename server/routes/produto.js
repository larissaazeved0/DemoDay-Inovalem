const express = require("express");
const router = express.Router();
const { Precificacoes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware")
const mysql = require('mysql2');


const db = mysql.createConnection ({
    user: "root",
    host: "localhost",
    password: "MySQL@2022",
    database: "empresa_inovalem"
})

//CRIAR TABELA 
router.post("/", validateToken, async (req, res) => {
    const { name, produto } = req.body;

    var sql = "CREATE TABLE IF NOT EXISTS ?? ( id INTEGER, ingrediente VARCHAR(255) NOT NULL, valorIngrediente FLOAT NOT NULL, qtdIngrediente FLOAT NOT NULL, qtdUtilizada FLOAT NOT NULL, rendimento FLOAT NOT NULL, PRIMARY KEY (id)) ENGINE=InnoDB;"
    db.query(sql, name, (err, result) => {
        console.log(err);
        console.log(result)
    })
    res.json(produto)
});

router.get('/auth', validateToken, (req, res) => {
    res.json(req.user)
})

//ADICIONAR 
router.post("/:name", async (req, res) => {

    const table = req.params.name;

    const { id, ingrediente, valorIngrediente, qtdIngrediente, qtdUtilizada, rendimento} = req.body;

    var into = "INSERT INTO ?? ( id, ingrediente, valorIngrediente, qtdIngrediente, qtdUtilizada, rendimento) VALUES (?,?,?,?,?,?)"
    var valores = [ table, id, ingrediente, valorIngrediente, qtdIngrediente, qtdUtilizada, rendimento]
    db.query(into, valores, (err, result) => {
        console.log(err);
        console.log(result)
    });
});




module.exports = router;