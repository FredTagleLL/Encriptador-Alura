
let resultado="";
let texto=""
let parrafo=document.querySelector("#btn__copiar");
function textarea(){
    texto=document.querySelector(".encriptador__texto").value;
    document.querySelector(".encriptador__texto").value="";    
}

function encriptado(){
    textarea();
    for (let letra of texto){
        switch(letra){
            case "a":
                letra="ai";
                break;
            case "e":
                letra="enter";
                break;
            case "i":
                letra="imes";
                break;
            case "o":
                letra="ober";
                break;
            case "u":
                letra="ufat";
                break;
            default:
                break;
        }
        resultado+=letra;
    }
    document.querySelector(".desencriptador__texto").value=resultado;
    resultado=""
    
    if(window.innerWidth <=375 && getComputedStyle(parrafo).visibility === "visible" )  {
        document.querySelector("#btn__copiar").scrollIntoView({behavior:"smooth"});
    }else{
        document.querySelector(".logo").scrollIntoView({behavior:"smooth"});

    }
}

function desencriptador(){
    textarea();
    texto=texto.replace(/ai/g,"a");
    texto=texto.replace(/enter/g,"e");
    texto=texto.replace(/imes/g,"i");
    texto=texto.replace(/ober/g,"o");
    texto=texto.replace(/ufat/g,"u");
    document.querySelector(".desencriptador__texto").value=texto;
    texto="";
    if(window.innerWidth <=375 && getComputedStyle(parrafo).visibility === "visible" )  {
        document.querySelector("#btn__copiar").scrollIntoView({behavior:"smooth"});
    }else{
        document.querySelector(".logo").scrollIntoView({behavior:"smooth"});
    }
}   
function copiar(){
    let textocopiar=document.querySelector(".desencriptador__texto").value;
    navigator.clipboard.writeText(textocopiar);
}

