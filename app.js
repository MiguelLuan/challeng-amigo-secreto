const entrada = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");

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
    console.log(listaNomes);
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
