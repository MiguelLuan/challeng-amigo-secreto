const entrada = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteio = document.getElementById("resultado");
const botaoSortear = document.getElementById("sortear");

let listaNomesAdicionados = [];
let listaNomesSorteados = [];

exibirLista();

function adicionarAmigo(){
    const nomeAmigo = entrada.value;

    if(nomeAmigo.trim() === "") return;

    const nomeFormatado = nomeAmigo
        .split(" ")
        .map( palavra => palavra[0].toUpperCase() + palavra.slice(1).toLowerCase())
        .join(" ");
    
    if(!listaNomesAdicionados.includes(nomeFormatado)){
        listaNomesAdicionados.push(nomeFormatado);
    }

    if (listaNomesAdicionados.length > 0){
        botaoSortear.removeAttribute("disabled");
    }
    entrada.value = "";
    resultadoSorteio.classList.add("hidden");
    exibirLista();
    listarAmigos();
}

function exibirLista(){
    if(listaNomesAdicionados.length === 0){
        listaAmigos.classList.add("hidden");
    }else{
        listaAmigos.classList.remove("hidden")
    }
}

function listarAmigos(){
    listaAmigos.innerHTML = "";
    for(let nome of listaNomesAdicionados){
        const amigo = document.createElement("li");
        amigo.innerHTML = nome;
        listaAmigos.appendChild(amigo);
    }

}

function sortearAmigo(){

    const tamanhoLista = listaNomesAdicionados.length;
    const indice = Math.floor(Math.random() * tamanhoLista);
    const nomeSorteado = listaNomesAdicionados[indice];

    if(listaNomesAdicionados.length === listaNomesSorteados.length){
        resultadoSorteio.innerHTML = "Todos os amigos secretos já foram sorteados!";
        botaoSortear.setAttribute("disabled");
        return;
    }else if(listaNomesSorteados.includes(nomeSorteado)) {
        return sortearAmigo();
    }

    listaNomesSorteados.push(nomeSorteado);

    listaAmigos.classList.add("hidden");
    resultadoSorteio.innerHTML = "O Amigo secreto é: " + nomeSorteado;
    resultadoSorteio.classList.remove("hidden");
}

