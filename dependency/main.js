var copiar = document.querySelector(".copiar");
var copyText = document.querySelector(".area_export");
var opcao = "0";


function myFunction(x){
    opcao = x;
}

function decisao(){
    switch (opcao) {
        case "0":
            var text_criptografia = document.querySelector(".area_input").value;
            var a = text_criptografia.replace(/e/gi, "enter");
            var b = a.replace(/i/gi, "imes");
            var c = b.replace(/a/gi, "ai");
            var d = c.replace(/o/gi, "ober");
            var e = d.replace(/u/gi, "ufat");
            
            document.querySelector(".area_export").value = e;
            break;

        case "1":
            var text_criptografia = document.querySelector(".area_input").value;
            var a = text_criptografia.replace(/enter/gi,"e");
            var b = a.replace(/imes/gi,"i");
            var c = b.replace(/ai/gi,"a");
            var d = c.replace(/ober/gi,"o");
            var e = d.replace(/ufat/gi,"u");
            
            document.querySelector(".area_export").value = e;
            break;
    }
}


function teste(){
    if(window.matchMedia("(orientation: portrait)").matches){
        document.querySelector("#img").style.display = "none";}

    if(document.querySelector(".area_export").value != ""){
        document.querySelector(".mensagem").style.display = "none";
        document.querySelector(".copiar").style.display = "block";
    }
    else{
        if(window.matchMedia("(orientation: landscape)").matches){
        document.querySelector(".mensagem").style.display = "block";}
        document.querySelector(".copiar").style.display = "none";
    }
}

setInterval(teste,41);
setInterval(decisao,41);


copiar.onclick = function ()
{
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}