let fraseUm = "Ano novo está chegando!";
let cantora = "Mariah Carey";
let cantor = "Roberto Carlos";
let idadeMariah = 54;
let ano = 2023;
let anoNascimento = `Mariah nasceu em ${ano - idadeMariah}`;
let compre = "Compre já seus ingressos.";
let producao = "Vai na Web produções - Direitos reservados - Material de estudo";
let quartaFeira = true;
let idade = 18;
let niver = "Janeiro";

console.log(`${fraseUm} e com ele não podem faltar os cantores favoritos de toda uma geração! ${cantora} e ${cantor} nos convidam ao projeto Christmans Emotions. ${anoNascimento} hoje, em ${ano} está com ${idadeMariah} e nos encanta com suas canções e belissima Voz! ${compre}`);

console.log(producao);

console.log(typeof quartaFeira);


if(idade >= 18){
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey");
} else{
    console.log( "Sinto muito, mas assistirá da tv globo");
}

if (niver === "Agosto"){
    console.log(`Existem opções corretas, mas qual será? :D Você me convenceu, o mês escolhido foi ${niver}`);
}else if(niver === "Dezembro"){
    console.log(`Existem opções corretas, mas qual será? :D Você me convenceu, o mês escolhido foi ${niver}`);
}else if(niver === "Junho"){
    console.log(`Existem opções corretas, mas qual será? :D Você me convenceu, o mês escolhido foi ${niver}`);
}
else{
    console.log(`Algo de errado não está certo, o mês digitado foi o mês ${niver}, Tenta de novo queridona`);
}

// FUNCIONALIDADES DOS INPUTS

const inputIdade = document.querySelector("#idade");
const inputSegredinho = document.querySelector("#bnumber");
const inputText = document.querySelector("#mes");
const inputOtimo = document.querySelector("#btext");

function segredo() {
    const idadeUser = inputIdade.value
if (idadeUser ===""){
    console.log("digite sua idade por favor")
    return
}

if(idadeUser>= 18){
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey");
} else{
    console.log( "Sinto muito, mas assistirá da tv globo");
}
}

inputSegredinho.addEventListener("click", segredo)


function otimo (){
    const mesUser = inputText.value
    if(mesUser === ""){
        console.log("digite um mês por favor")
    }else if (mesUser === "Agosto" || mesUser === "Junho" || mesUser === "Dezembro"){
        console.log(`Existem opções corretas, mas qual será? :D Você me convenceu, o mês escolhido foi ${mesUser}`);
    }
    else{
        console.log(`Algo de errado não está certo, o mês digitado foi o mês ${mesUser}, Tenta de novo queridona`);
}
}

inputOtimo.addEventListener("click", otimo)
