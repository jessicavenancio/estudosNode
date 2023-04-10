const usersImport = "./moduleUsers.js";

function authenticate (email, senha) {
    const usuario = usersImport.find(usuario => usuario.email === email && usuario.senha === senha)
    if (usuario) {
        return true;
    } else {
        return false;
    }
}

module.exports = authenticate;