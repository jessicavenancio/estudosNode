/**
 *Exercicio IV
 * Escrever um arquivo txt com as informações do sistema
 */
const os = require("os");
const fs = require("fs");

const arquitetura = os.arch();
const plataforma = os.platform();
const usuario = os.hostname();
const versao = os.version();

fs.writeFileSync("./jessica.txt", `${arquitetura}\n${plataforma}\n${usuario}\n${versao}`);