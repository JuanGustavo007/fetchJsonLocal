// const url = "./assets/base/informacoes.json";

// fetch(url)
//   .then((resposta) => {
//     return resposta.json();
//   })
//   .then((pegandoInfos) => {
//     const informacoes = pegandoInfos;
//     informacoes.forEach((element) => {
//       console.log(element.nome);
//     });
//   });

//Usando async

async function dados() {
  try {
    const url = "./assets/base/informacoes.json";
    const conectandourl = await fetch(url); //acessando a url
    const dadoParaJson = await conectandourl.json();

    dadoParaJson.forEach((element) => {
      console.log(element);
      const lista = document.querySelector("ul");
      const listaNaoOrdenada = document.createElement("li"); //criamdo o items da lista
      listaNaoOrdenada.innerText = element.nome;
      listaNaoOrdenada.classList.add("sumir");
      lista.appendChild(listaNaoOrdenada);
    });
    const selecionandoinput = document.querySelector("input");
    const selecionandoBotao = document.querySelector("button");
    const ulLista = document.querySelector("ul");
    selecionandoBotao.addEventListener("click", (evento) => {
      evento.preventDefault();
      const lis = document.querySelectorAll("li");
      lis.forEach((elemento) => {
        if (
          selecionandoinput.value.toLowerCase() ===
          elemento.innerText.toLowerCase()
        ) {
          elemento.classList.add("aparecer");
        }
      });
    });
  } catch {
    console.log("deu erro");
  }
}

console.log(dados());
