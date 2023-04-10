/** EXERCÍCIO III: Crie um novo módulo chamado usuarios.js e exporte um array de objetos
 * usuário (nome, email e senha). Crie um novo módulo login com uma função autenticar,
 * ela deve receber email e senha e verificar se estes dados são válidos de acordo com o * array do módulo de usuários (utilize find, filter o etc). 
 * Mostrar uma mensagem se são * válidos ou não.
 */

const users = {
    user1 : ["Jéssica", "jessica@gmail.com", "123"],
    user2 : ["Farid", "farid@gmail.com", "456"]
};


module.exports = users;