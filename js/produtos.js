let sumir = document.getElementById("adquira");
let sumir2 = document.getElementById("adquira2");
let sumir3 = document.getElementById("cadastrar")

window.addEventListener('scroll', function() {
    const efeito = window.scrollY;
    
    if (efeito > 15) {
        sumir.classList.add('hidden');
    } else {
        sumir.classList.remove('hidden');
    }
});

window.addEventListener('scroll', function() {
    const efeito2 = window.scrollY;

    if (efeito2 > 15) {
        sumir2.classList.add('hidden');
    } else {
        sumir2.classList.remove('hidden');
    }
});

window.addEventListener('scroll', function() {
    const efeito3 = window.scrollY;
    
    if (efeito3 > 20) {
        sumir3.classList.add('hidden');
    } else {
        sumir3.classList.remove('hidden') 
    }
});

const cadastrarProduto = document.getElementById("cadastrar")
const logado = localStorage.getItem("logado") === "true"
const admin = localStorage.getItem("user") === "admin"

if(logado && admin) {
    cadastrarProduto.style.display = "block"
} else {
    cadastrarProduto.style.display = "none"
}

const botaoComprar = document.getElementById("redirecionar")

if(!logado) {
    botaoComprar.setAttribute("href", "../other_pages/login.html") 
}

const produtos = JSON.parse(localStorage.getItem("listaDeProdutos"))

const modelo = document.querySelector(".card")
modelo.classList.add("produtoBase")
const container = document.getElementById("cards")

produtos.forEach(produto => {

    let novoCard = modelo.cloneNode(true)
    novoCard.classList.add("produtoAdicionado")

    let imagem = novoCard.querySelector('img');
    let titulo = novoCard.querySelector('h4');
    let descricao = novoCard.querySelector('p');
    let preco = novoCard.querySelector('h3');

    imagem.src = produto.imagem
    titulo.textContent = produto.nome
    descricao.textContent = produto.descricao
    preco.textContent = `R$${produto.valor}`;

    container.appendChild(novoCard)
});

const botoes = document.querySelectorAll(".checkout")

   botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const card = botao.closest(".card");

        const nomeProduto = card.querySelector("h4").textContent;
        const valorProduto = card.querySelector("h3").textContent;

        const produtoSelecionado = { nome: nomeProduto, valor: valorProduto };
        localStorage.setItem("produtoSelecionado", JSON.stringify(produtoSelecionado));
    })
   })



