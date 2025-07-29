const entrada = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteio = document.getElementById("resultado");

let listaNomes = [];

exibirLista();

function adicionarAmigo(){
    const nomeAmigo = entrada.value;

    if(nomeAmigo.trim() === "") return;

    const nomeFormatado = nomeAmigo
        .split(" ")
        .map( palavra => palavra[0].toUpperCase() + palavra.slice(1).toLowerCase())
        .join(" ");
    
    if(!listaNomes.includes(nomeFormatado)){
        listaNomes.push(nomeFormatado);
    }
    entrada.value = "";
    resultadoSorteio.classList.add("hidden");
    exibirLista();
    listarAmigos();
}

function exibirLista(){
    if(listaNomes.length === 0){
        listaAmigos.classList.add("hidden");
    }else{
        listaAmigos.classList.remove("hidden")
    }
}

function listarAmigos(){
    listaAmigos.innerHTML = "";
    for(let nome of listaNomes){
        const amigo = document.createElement("li");
        amigo.innerHTML = nome;
        listaAmigos.appendChild(amigo);
    }

}

function sortearAmigo(){
    const tamanhoLista = listaNomes.length;
    const indice = Math.floor(Math.random() * tamanhoLista);
    const nomeSorteeado = listaNomes[indice];
    listaAmigos.classList.add("hidden");
    resultadoSorteio.innerHTML = "O Amigo secreto é: " + nomeSorteeado;
    resultadoSorteio.classList.remove("hidden");
}

