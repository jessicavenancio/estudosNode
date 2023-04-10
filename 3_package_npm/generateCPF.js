/** EXERCÍCIO V: Crie um arquivo txt com 1000 cpf aleatórios.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */

const CPF = require("cpf");
const fs = require("fs");

    for (let i=0; i < 100; i++){
        const newCpf = CPF.generate();
        fs.appendFileSync("cpfs.txt", newCpf + "\n");
    }

    const readCpfs = fs.readFileSync("./cpfs.txt").toString().split("\n");
    for (let cpf of readCpfs){
        console.log(cpf);
    }