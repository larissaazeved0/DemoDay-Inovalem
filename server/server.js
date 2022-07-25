const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models")


//rotas
    const userRouter = require("./routes/cadastro")
    app.use("/cadastrar", userRouter);
    const precificacaoRouter = require("./routes/precificacao")
    app.use("/precificacao", precificacaoRouter);
    const logoutRouter = require("./routes/logout")
    app.use("/logout", logoutRouter);
    const loginRouter = require("./routes/login")
    app.use("/login", loginRouter);
    const produtoRouter = require("./routes/produto")
    app.use("/produto", produtoRouter);
    const homeRouter = require("./routes/home")
    app.use("/home", homeRouter);
    const workRouter = require("./routes/workshop")
    app.use("/workshop", workRouter);
    const filtragemRouter = require("./routes/filtragem")
    app.use("/filtragem", filtragemRouter);
//



db.sequelize.sync().then(() =>{
    app.listen(9000, () => {
    console.log("servidor rodando na url http://localhost:9000")
    }).on('error', function(err) {
        
        process.once('SIGUSR2', function () {
            process.kill(process.pid, 'SIGUSR2');
        });

        process.on('SIGINT', function () {
            process.kill(process.pid, 'SIGINT');
        });

        process.on('uncaughtException', function (err) {
            console.log( "UNCAUGHT EXCEPTION" );
            console.log( "[Inside 'uncaught Exception']")
        });
    });
});