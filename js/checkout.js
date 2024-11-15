
let nomeDoUsuario = document.getElementById("nomeAqui");

let dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

const logado = localStorage.getItem("logado") === "true"
const user = localStorage.getItem("user") === "admin"

if (dadosUsuario && logado) {
    nomeDoUsuario.textContent = `Olá, ${dadosUsuario.nomeDoUsuario}`;
}  

if (user) {
    nomeDoUsuario.textContent = `Olá, Administrador`;
}


