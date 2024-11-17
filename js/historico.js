let pessoas = JSON.parse(localStorage.getItem("listaUsuarios"))
let produtoss = JSON.parse(localStorage.getItem("listaDeProdutos"))

const corpoDaTabela = document.querySelector("#pessoas tbody")
const segundaTabela = document.querySelector("#produto tbody")

    pessoas.forEach(p => {
        
        const tr = document.createElement("tr")
        
        const tdNome = document.createElement("td")
        tdNome.textContent = p.nomeDoUsuario
        tr.appendChild(tdNome)

        const tdSobrenome = document.createElement("td")
        tdSobrenome.textContent = p.sobrenomeDoUsuario
        tr.appendChild(tdSobrenome)

        const tdUsuario = document.createElement("td")
        tdUsuario.textContent = p.usuario
        tr.appendChild(tdUsuario)

        const tdEmail = document.createElement("td")
        tdEmail.textContent = p.email
        tr.appendChild(tdEmail)

        const tdSenha = document.createElement("td")
        tdSenha.textContent = p.senha
        tr.appendChild(tdSenha)

        corpoDaTabela.appendChild(tr)
    
    });

    produtoss.forEach(x => {

        const tr2 = document.createElement("tr")
        
        const tdProduto = document.createElement("td")
        tdProduto.textContent = x.nome
        tr2.appendChild(tdProduto)

        const tdValor = document.createElement("td")
        tdValor.textContent = x.valor
        tr2.appendChild(tdValor)

        segundaTabela.appendChild(tr2)

    })

