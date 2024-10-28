export function salvarNoLocalStorage(chave, valor) {
    localStorage.setItem(chave, JSON.stringify(valor));
  }
  
  export function obterDoLocalStorage(chave) {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) : [];
  }
  