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


router.post("/", async (req, res) => {
    const tabela = req.body.id;
    sql = "DROP TABLE ??"
    db.query(sql, tabela, (err, result) => {
        console.log(err);
        console.log(result)
    })
});


module.exports = router;