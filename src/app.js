const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        mensagem:"Ola deveopes"
    });
});

app.listen(3000, () => {
    console.log("servidor foi iniciado");
});