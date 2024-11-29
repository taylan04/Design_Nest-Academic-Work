let pessoas = JSON.parse(localStorage.getItem("listaUsuarios"));
let produtoss = JSON.parse(localStorage.getItem("listaDeProdutos"));

const corpoDaTabela = document.querySelector("#pessoas tbody");
const segundaTabela = document.querySelector("#produto tbody");

pessoas.forEach((p, index) => {
  const tr = document.createElement("tr");

  const tdNome = document.createElement("td");
  tdNome.textContent = p.nomeDoUsuario;
  tr.appendChild(tdNome);

  const tdSobrenome = document.createElement("td");
  tdSobrenome.textContent = p.sobrenomeDoUsuario;
  tr.appendChild(tdSobrenome);

  const tdUsuario = document.createElement("td");
  tdUsuario.textContent = p.usuario;
  tr.appendChild(tdUsuario);

  const tdEmail = document.createElement("td");
  tdEmail.textContent = p.email;
  tr.appendChild(tdEmail);

  const tdSenha = document.createElement("td");
  tdSenha.textContent = p.senha;
  tr.appendChild(tdSenha);

  const tdDelete = document.createElement("td");
  tdDelete.innerHTML = `<i class="fa-solid fa-user-minus fa-xl" style="color: #c10606; cursor: pointer;"></i>`;
  tr.appendChild(tdDelete);

  corpoDaTabela.appendChild(tr);

  tdDelete.querySelector("i").addEventListener("click", function () {
    pessoas.splice(index, 1);
    localStorage.setItem("listaUsuarios", JSON.stringify(pessoas));
    tr.remove();
  });
});

produtoss.forEach((x, index) => {
  const tr2 = document.createElement("tr");

  const tdProduto = document.createElement("td");
  tdProduto.textContent = x.nome;
  tr2.appendChild(tdProduto);

  const tdValor = document.createElement("td");
  tdValor.textContent = x.valor;
  tr2.appendChild(tdValor);

  const tdDelete2 = document.createElement("td");
  tdDelete2.innerHTML = `<i class="fa-solid fa-eraser fa-lg" style="color: #dc0909; cursor: pointer;"></i>`;
  tr2.appendChild(tdDelete2);

  segundaTabela.appendChild(tr2);

  tdDelete2.querySelector("i").addEventListener("click", function () {
    produtoss.splice(index, 1);
    localStorage.setItem("listaDeProdutos", JSON.stringify(produtoss));
    tr2.remove();
  });
});
