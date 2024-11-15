let sumir = document.getElementById("adquira");
let sumir2 = document.getElementById("adquira2");
let sumir3 = document.getElementById("cadastrar")

window.addEventListener('scroll', function() {
    const efeito = window.scrollY;
    
    if (efeito > 50) {
        sumir.classList.add('hidden');
    } else {
        sumir.classList.remove('hidden');
    }
});

window.addEventListener('scroll', function() {
    const efeito2 = window.scrollY;

    if (efeito2 > 50) {
        sumir2.classList.add('hidden');
    } else {
        sumir2.classList.remove('hidden');
    }
});

window.addEventListener('scroll', function() {
    const efeito3 = window.scrollY;
    
    if (efeito3 > 50) {
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


