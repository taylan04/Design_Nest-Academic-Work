
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

 function formatDate(event) {
    let value = event.target.value;

    if (value.length > 2 && value.indexOf('/') === -1) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
      }

    event.target.value = value;
 }



 let telaDeCheckout = document.getElementById("informacoes")
 let sucesso = document.getElementById("sucesso")
 let painel = document.getElementById("painel")

 let dados = document.querySelectorAll(".dadosCartao")
 
 function comprar() {

    let campoVazio = false

    for (let campo of dados) {
      const ok = campo.value

        if (ok === "") {
            campoVazio = true;
        }
    }

        if (campoVazio) {
        alert("Preencha todos os dados do cartão.");
        } else {
        console.log("Compra confirmada!");
    }


    let validador = true

     const checkbox = document.getElementById("aceitar")

    if(checkbox.checked) {
        console.log("termos aceitos.")
    } else {
        alert("Confirme se está de acordo com as informações.")
        validador = false
    }

    if(validador) {
        telaDeCheckout.style.display = "none"
        sucesso.style.display = "block"
        painel.style.backgroundImage = "linear-gradient(to right, rgb(50, 231, 22), rgb(179, 240, 11))"
    }
 }

 const produto = JSON.parse(localStorage.getItem("produtoSelecionado"));

if (produto) {
    document.getElementById("nome").textContent = produto.nome;
    document.getElementById("valor").textContent = produto.valor;
}
