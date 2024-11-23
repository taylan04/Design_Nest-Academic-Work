let imagem = document.getElementById("srcImagem")
let nome = document.getElementById("nome")
let descricao = document.getElementById("descricao")
let valor = document.getElementById("valor")


class Produtos {
    constructor(imagem, nome, descricao, valor) {
        this.imagem = imagem
        this.nome = nome
        this.descricao = descricao
        this.valor = valor
    }
}

function cadastrar() {

    let caracteres = descricao.value.length
    
    if (!imagem.value || !nome.value || !descricao.value || !valor.value) {
        alert("Por favor, preencha todos os campos antes de cadastrar.");
        return;
        }

    let novoProduto = new Produtos (
        imagem.value,
        nome.value,
        descricao.value,
        valor.value
    )
    
    let listaDeProdutos = JSON.parse(localStorage.getItem("listaDeProdutos")) || []
    
    listaDeProdutos.push(novoProduto)

    localStorage.setItem("listaDeProdutos", JSON.stringify(listaDeProdutos))

    alert("Produto cadastrado com sucesso!")
    window.location.href = "../other_pages/produtos.html"
}