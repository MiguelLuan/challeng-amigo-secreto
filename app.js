const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoSorteio = document.getElementById("resultado");
const botaoSortear = document.getElementById("sortear");
const botaoResetar = document.getElementById("resetar");
const botaoOcultar = document.getElementById("ocultar");

let amigosAdicionados = [];
let amigosSorteados = [];

exibirLista();

function adicionarAmigo(){
    const nomeAmigo = inputAmigo.value;

    if(!/[A-Za-z]/.test(nomeAmigo)){
        alert("Adicione um nome válido!")
        return ;
    }

    const nomeFormatado = nomeAmigo
        .split(" ")
        .map( palavra => palavra[0].toUpperCase() + palavra.slice(1).toLowerCase())
        .join(" ");
    
    const nomeExistente = amigosAdicionados.some( amigo => amigo.split(" ").join("").toLowerCase() === nomeFormatado.split(" ").join("").toLowerCase())

    if(!nomeExistente){
        amigosAdicionados.push(nomeFormatado);
    }else{
        alert(`\"${nomeFormatado}\" já foi adicionado a lista de amigos secretos!`);
        return ;
    }

    if (amigosAdicionados.length > 0){
        botaoSortear.removeAttribute("disabled");
    }
    inputAmigo.value = "";
    resultadoSorteio.classList.add("hidden");
    botaoResetar.removeAttribute("disabled");

    exibirLista();
    listarAmigos();
}

function exibirLista(){
    if(amigosAdicionados.length === 0){
        listaAmigos.classList.add("hidden");
    }else{
        listaAmigos.classList.remove("hidden")
    }
}

function listarAmigos(){
    listaAmigos.innerHTML = "";
    for(let nome of amigosAdicionados){
        const amigo = document.createElement("li");
        amigo.innerHTML = nome;
        listaAmigos.appendChild(amigo);
    }

}

function sortearAmigo(){

    const tamanhoLista = amigosAdicionados.length;
    const indice = Math.floor(Math.random() * tamanhoLista);
    const nomeSorteado = amigosAdicionados[indice];

    if(amigosAdicionados.length < 2){
        alert("Adicione pelo menos mais um amigo secreto!");
        return ;
    }
    
    resultadoSorteio.classList.remove("hidden");

    if(amigosAdicionados.length === amigosSorteados.length){
        resultadoSorteio.innerHTML = "Todos os amigos secretos já foram sorteados!";
        botaoSortear.setAttribute("disabled",true);
        botaoOcultar.setAttribute("disabled",true);
        return;
    }else if(amigosSorteados.includes(nomeSorteado)) {
        return sortearAmigo();
    }

    amigosSorteados.push(nomeSorteado);

    resultadoSorteio.innerHTML = "O Amigo secreto é: " + nomeSorteado;

    botaoOcultar.removeAttribute("disabled");
    
}

function resetarLista(){
    resultadoSorteio.classList.add("hidden");
    botaoSortear.setAttribute("disabled",true);
    botaoOcultar.setAttribute("disabled",true);
    botaoResetar.setAttribute("disabled",true);

    amigosAdicionados = [];
    amigosSorteados = [];
    inputAmigo.value = "";

    exibirLista();
    listarAmigos();
}

function ocultarResultado(){
    resultadoSorteio.classList.add("hidden");
    resultadoSorteio.innerHTML = "";
    botaoOcultar.setAttribute("disabled",true);
}