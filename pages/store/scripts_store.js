/* ----- ENG: Pop-Ups ----- */
/* ----- PT: Separadores ----- */

var sep = document.getElementById('popup-info');
var send = document.getElementById('popup-infoSend');
var add = document.getElementById('popup-infoAdd')

var black = document.getElementById('opacityPopUp');
var blackSend = document.getElementById('opacityPopUpSend');
var blackAdd = document.getElementById('opacityPopUpAdd');

var body = document.body;

function toggleSeparador() {
    body.classList.add("body_active")
    if (body.classList.contains("body_active"))
    {
        sep.style.transform = "translateX(" + (0) + "px)";
        black.classList.add("opacity_active")
    }
}

function esconderSeparador() {
    body.classList.remove("body_active")
    sep.style.transform = "translateX(" + (500) + "px)";
    black.classList.remove("opacity_active")
}

function toggleSeparadorSend() {
    body.classList.add("body_active")
    if (body.classList.contains("body_active"))
    {
        send.style.transform = "translateX(" + (0) + "px)";
        blackSend.classList.add("opacity_active")
    }
}

function esconderSeparadorSend() {
    body.classList.remove("body_active")
    send.style.transform = "translateX(" + (500) + "px)";
    blackSend.classList.remove("opacity_active")
}

function toggleSeparadorAdd() {
    if (numero > 0) {
        body.classList.add("body_active")
        if (body.classList.contains("body_active"))
        {
            add.style.transform = "translateX(" + (0) + "px)";
            blackAdd.classList.add("opacity_active")
        }
    }
}

function esconderSeparadorAdd() {
    body.classList.remove("body_active")
    add.style.transform = "translateX(" + (500) + "px)";
    blackAdd.classList.remove("opacity_active")
}

/* ----- ENG: Sizes ----- */
/* ----- PT: Tamanhos ----- */

var XS = document.getElementById('XS');
var S = document.getElementById('S');
var M = document.getElementById('M');
var L = document.getElementById('L');
var XL = document.getElementById('XL');

var tamanho = "";

function ativarXS() {
    XS.classList.add("btn-active");
    S.classList.remove("btn-active");
    M.classList.remove("btn-active");
    L.classList.remove("btn-active");
    XL.classList.remove("btn-active");
    tamanho = "XS";
    numero = 0;
}

function ativarS() {
    XS.classList.remove("btn-active");
    S.classList.add("btn-active");
    M.classList.remove("btn-active");
    L.classList.remove("btn-active");
    XL.classList.remove("btn-active");
    tamanho = "S";
    numero = 0;
}

function ativarM() {
    XS.classList.remove("btn-active");
    S.classList.remove("btn-active");
    M.classList.add("btn-active");
    L.classList.remove("btn-active");
    XL.classList.remove("btn-active");
    tamanho = "M";
    numero = 0;
}

function ativarL() {
    XS.classList.remove("btn-active");
    S.classList.remove("btn-active");
    M.classList.remove("btn-active");
    L.classList.add("btn-active");
    XL.classList.remove("btn-active");
    tamanho = "L";
    numero = 0;
}

function ativarXL() {
    XS.classList.remove("btn-active");
    S.classList.remove("btn-active");
    M.classList.remove("btn-active");
    L.classList.remove("btn-active");
    XL.classList.add("btn-active");
    tamanho = "XL";
    numero = 0;
}

/* ----- ENG: Shopping Cart ----- */
/* ----- PT: Carrinho de Compras ----- */

var number = document.getElementById("cart-number");
var qty = document.getElementById("qty-p");

var minus = document.getElementById("minus-qty");
var plus = document.getElementById("plus-qty");

var precoTot = document.getElementById("p-total");
var tamanhoInfo = document.getElementById("info-size");

var numero = 0;
var btns = [XS,S,M,L,XL];
var warning = document.getElementById("invalid-box")

minus.addEventListener("click", function(){
    if (numero > 1) {
        numero -= 1
        qty.innerHTML = numero;
        number.innerHTML = numero;
        precoTot.innerHTML = numero * 20;
    }
});

plus.addEventListener("click", function() {
    numero += 1;
    qty.innerHTML = numero;
    number.innerHTML = numero;
    precoTot.innerHTML = numero * 20;
});

function incrementar()
{
    var count = 0;
    btns.forEach(btn => {
        if (btn.classList.contains("btn-active")) {
            count++;
        } 
    });
    
    if (count > 0) {
        numero += 1;
        number.innerHTML = numero;
        qty.innerHTML = numero;
        warning.style.display = "none";
        toggleSeparadorAdd();
        tamanhoInfo.innerHTML = tamanho;
        precoTot.innerHTML = numero * 20;
    }
    else {
        warning.style.display = "block";
    }
}