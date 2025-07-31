const entrada = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteio = document.getElementById("resultado");
const botaoSortear = document.getElementById("sortear");
const botaoResetar = document.getElementById("resetar");

let listaNomesAdicionados = [];
let listaNomesSorteados = [];

exibirLista();

function adicionarAmigo(){
    const nomeAmigo = entrada.value;

    if(!Number.isNaN(Number(nomeAmigo))){
        alert("Adicione um nome válido!")
        return ;
    }

    const nomeFormatado = nomeAmigo
        .split(" ")
        .map( palavra => palavra[0].toUpperCase() + palavra.slice(1).toLowerCase())
        .join(" ");
    
    if(!listaNomesAdicionados.includes(nomeFormatado)){
        listaNomesAdicionados.push(nomeFormatado);
    }else{
        alert(`\"${nomeFormatado}\" já foi adicionado a lista de amigos secretos!`);
        return ;
    }

    if (listaNomesAdicionados.length > 0){
        botaoSortear.removeAttribute("disabled");
    }
    entrada.value = "";
    resultadoSorteio.classList.add("hidden");
    botaoResetar.removeAttribute("disabled");

    exibirLista();
    listarAmigos();
    console.log(listaNomesAdicionados,"\n",listaNomesSorteados)

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
        amigo.innerHTML = `${nome} <button onclick="apagarAmigo(event)">🗑️</button>`;
        listaAmigos.appendChild(amigo);
    }

}

function sortearAmigo(){

    const tamanhoLista = listaNomesAdicionados.length;
    const indice = Math.floor(Math.random() * tamanhoLista);
    const nomeSorteado = listaNomesAdicionados[indice];

    if(listaNomesAdicionados.length === listaNomesSorteados.length){
        resultadoSorteio.innerHTML = "Todos os amigos secretos já foram sorteados!";
        botaoSortear.setAttribute("disabled",true);
        return;
    }else if(listaNomesSorteados.includes(nomeSorteado)) {
        return sortearAmigo();
    }

    listaNomesSorteados.push(nomeSorteado);

    listaAmigos.classList.add("hidden");
    resultadoSorteio.innerHTML = "O Amigo secreto é: " + nomeSorteado;
    resultadoSorteio.classList.remove("hidden");

        console.log(listaNomesAdicionados,"\n",listaNomesSorteados)

}

function resetarLista(){
    resultadoSorteio.classList.add("hidden");
    botaoSortear.setAttribute("disabled",true);
    botaoResetar.setAttribute("disabled",true);
    listaNomesAdicionados = [];
    listaNomesSorteados = [];
    entrada.value = "";
    resultadoSorteio.classList.add("hidden");

    exibirLista();
    listarAmigos();
}

function apagarAmigo(event){
    const amigoDeletado = event.target.parentElement;
    const listaAmigos = document.querySelectorAll("li")
    const indiceAmgDeletado = Array.from(listaAmigos).indexOf(amigoDeletado);

    if(indiceAmgDeletado !== -1){
        listaNomesAdicionados.splice(indiceAmgDeletado,1);
        listaNomesSorteados.pop(listaNomesAdicionados[indiceAmgDeletado]);
    }
    console.log(listaNomesAdicionados,"\n",listaNomesSorteados)
    exibirLista();
    listarAmigos();

}

