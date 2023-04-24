var criptografia = document.querySelector(".criptografar");
var descriptografia = document.querySelector(".descriptografar");
var copiar = document.querySelector(".copiar");
var copyText = document.querySelector(".area_export");

function teste(){
    if(window.matchMedia("(orientation: portrait)").matches){
        document.querySelector("#img").style.display = "none";}

    if(document.querySelector(".area_export").value != ""){
        document.querySelector("#img").style.display = "none";
        document.querySelector(".copiar").style.display = "block";
    }
    else{
        if(window.matchMedia("(orientation: landscape)").matches){
        document.querySelector("#img").style.display = "block";}
        document.querySelector(".copiar").style.display = "none";
    }
}

setInterval(teste,41);

criptografia.onclick = function (){
    var text_criptografia = document.querySelector(".area_input").value;
    let a = text_criptografia.replace(/e/gi, "enter");
    let b = a.replace(/i/gi, "imes");
    let c = b.replace(/a/gi, "ai");
    let d = c.replace(/o/gi, "ober");
    let e = d.replace(/u/gi, "ufat");
    
    document.querySelector(".area_export").value = e;
}

descriptografia.onclick = function (){
    var text_criptografia = document.querySelector(".area_input").value;
    let a = text_criptografia.replace(/enter/gi,"e");
    let b = a.replace(/imes/gi,"i");
    let c = b.replace(/ai/gi,"a");
    let d = c.replace(/ober/gi,"o");
    let e = d.replace(/ufat/gi,"u");
    
    document.querySelector(".area_export").value = e;
}

copiar.onclick = function ()
{
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
}