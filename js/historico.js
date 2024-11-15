let pessoas = JSON.parse(localStorage.getItem("listaUsuarios"))

const corpoDaTabela = document.querySelector("#pessoas tbody")

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

