const calcImc = require("./moduleImc");
const calculator = require("./moduleCalc");
const convertTemp = require("./moduloConversor");

console.log(calculator.div(10,2));
console.log(calculator.sub(8,2));

console.log(calculator.mult(2,calculator.pi));

//Exercício I
console.log(calcImc.calcImc(87.5, 1.88));
console.log(calcImc.statusImc(21.5));

//Exercício II
console.log("-------EXERCÍCIO DOIS------");
console.log(convertTemp.convertC(30));
console.log(convertTemp.convertF(90));

////Exercício III
// Exercício 3
const authenticate = require('./moduleAuthenticate')
const autenticado = authenticate('jose@gmail.com', 'jose')
if (autenticado){
    console.log('Autenticado')
} else {
    console.log('Não autenticado')
}

