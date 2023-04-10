/** EXERCÍCIO VI: Crie uma nova pasta (pacote_exercicio) e rode
 * npm init -y. Configure o "start" para "node ./index.js".
 * Instale o pacote colors e utilize este pacote.
 * https://www.npmjs.com/package/colors
 */

var colors = require('colors');
var emoji = require('node-emoji');

console.log('Hello world!'.underline.green);
console.log( emoji.get('coffee'));
console.log( "Eu amo ".rainbow + emoji.get('pizza') + " !");
