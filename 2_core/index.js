//core modules = modulos embutidos

//Módulo operational system(os)

const os = require("os");

// console.log(os.arch());
// console.log(os.platform());
// console.log(os.type());
// console.log(os.version());
// console.log(os.uptime());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.hostname());

//Módulo fs = fileSystem
const fs = require("fs");
fs.writeFileSync("./newFile.txt", "Teste arquivo novo");
const file = fs.readFileSync("./newFile.txt");
console.log(file.toString());