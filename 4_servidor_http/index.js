const http = require("http");
const os = require("os");
const cpf = require("cpf");

const host = "localhost"; //onde vai "rodar"
const port = 3000; //qual porta

const servidor = http.createServer((request, answer) => {
    //cria o servidor
    console.log("Requisição aconteceu!");
    //faz a requisição da resposta
    answer.write("<h1>Informacoes do sistemas</h1>"); //escreve a resposta para quem fez a solicitação
    answer.write("<hr/>");
    answer.write(`<p>${os.hostname()} | ${os.platform()} | ${os.type()}</p>`);
    answer.write(`<p><b>Total de cpus:</b> ${os.cpus().length}</p>`);

    // * EXERCÍCIO VII: Instale o pacote cpf, e na resposta escreva
    //  * um cpf aleatório.
    //  * TEMPO = 17H00
    answer.write(`<p> CPF: ${cpf.generate()}<p/>`)

    answer.end(); //encerra a comunicação
});

servidor.listen(port, host);
