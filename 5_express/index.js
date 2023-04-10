const express = require("express");

//define uma aplicação backend em Express
//Recursos pré configurados
const app = express();

//define um roteamento
//manipulador de rotas
app.get("/", (request, answer) =>{
    answer.send("Hello, world!");
});

//defina a porta
app.listen(3000);