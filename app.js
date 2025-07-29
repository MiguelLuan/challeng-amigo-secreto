const entrada = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteio = document.getElementById("resultado");

const listaNomes = [];

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
    resultadoSorteio.innerHTML = "";
    listarAmigos();
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
    console.log(indice,listaNomes)
    const nomeSorteeado = listaNomes[indice];
    listaAmigos.innerHTML = "";
    resultadoSorteio.innerHTML = "O Amigo secreto é:\n" + nomeSorteeado;

}

