var title = document.getElementById("title");

var depBox = document.querySelector(".dep-box");
var levBox = document.querySelector(".lev-box");
var transBox = document.querySelector(".trans-box");

var btnDep = document.querySelector(".dep");
var btnLev = document.querySelector(".lev");
var btnTrans = document.querySelector(".trans");

function ativarDep() {
    if (btnLev.classList.contains("btn-active")) {
        levBox.style.display = "none";
        btnLev.classList.remove("btn-active");
        title.innerHTML = "CasiGO | Depósito";
        btnDep.classList.add("btn-active"); 
        depBox.style.display = "flex"
    }
    else if (btnTrans.classList.contains("btn-active")) {
        transBox.style.display = "none";
        btnTrans.classList.remove("btn-active");
        title.innerHTML = "CasiGO | Depósito";
        btnDep.classList.add("btn-active"); 
        depBox.style.display = "flex";   
    }
    else {
        title.innerHTML = "CasiGO | Depósito";
        btnDep.classList.add("btn-active");
        depBox.style.display = "flex";    
    }
}

function ativarLev() {
    if (btnDep.classList.contains("btn-active")) {
        depBox.style.display = "none";
        btnDep.classList.remove("btn-active");
        title.innerHTML = "CasiGO | Levantamento";
        btnLev.classList.add("btn-active");
        levBox.style.display = "flex";
    }
    else if (btnTrans.classList.contains("btn-active")) {
        transBox.style.display = "none";
        btnTrans.classList.remove("btn-active");
        title.innerHTML = "CasiGO | Levantamento";
        btnLev.classList.add("btn-active");
        levBox.style.display = "flex";
    }
    else {
        title.innerHTML = "CasiGO | Levantamento";
        btnLev.classList.add("btn-active");
        levBox.style.display = "flex";    
    }
}

function ativarTrans() {
    if (btnDep.classList.contains("btn-active")) {
        depBox.style.display = "none";
        btnDep.classList.remove("btn-active");
        title.innerHTML = "CasiGO | Transações";
        btnTrans.classList.add("btn-active");  
        transBox.style.display = "flex";  
    }
    else if (btnLev.classList.contains("btn-active")) {
        levBox.style.display = "none";
        btnLev.classList.remove("btn-active");
        title.innerHTML = "CasiGO | Transações";
        btnTrans.classList.add("btn-active");    
        transBox.style.display = "flex";
    }
    else {
        title.innerHTML = "CasiGO | Transações";
        btnTrans.classList.add("btn-active");   
        transBox.style.display = "flex"; 
    }
}

var valor = document.getElementById("depAmount");
var valor2 = document.getElementById("levAmount");

var btn10 = document.querySelector(".btn10");
var btn25 = document.querySelector(".btn25");
var btn50 = document.querySelector(".btn50");
var btn100 = document.querySelector(".btn100");
var btn250 = document.querySelector(".btn250");
var btn500 = document.querySelector(".btn500");

var btn10lev = document.querySelector(".btn10lev");
var btn25lev = document.querySelector(".btn25lev");
var btn50lev = document.querySelector(".btn50lev");
var btn100lev = document.querySelector(".btn100lev");
var btn250lev = document.querySelector(".btn250lev");
var btn500lev = document.querySelector(".btn500lev");

function e10() {
    valor.value = 10;
    valor.style.borderBottomColor = "#e6b709";

    btn10.classList.add("amount-box-active");
    btn25.classList.remove("amount-box-active");
    btn50.classList.remove("amount-box-active");
    btn100.classList.remove("amount-box-active");
    btn250.classList.remove("amount-box-active");
    btn500.classList.remove("amount-box-active");
}

function e25() {
    valor.value = 25;
    valor.style.borderBottomColor = "#e6b709";

    btn10.classList.remove("amount-box-active");
    btn25.classList.add("amount-box-active");
    btn50.classList.remove("amount-box-active");
    btn100.classList.remove("amount-box-active");
    btn250.classList.remove("amount-box-active");
    btn500.classList.remove("amount-box-active");
}

function e50() {
    valor.value = 50;
    valor.style.borderBottomColor = "#e6b709"

    btn10.classList.remove("amount-box-active");
    btn25.classList.remove("amount-box-active");
    btn50.classList.add("amount-box-active");
    btn100.classList.remove("amount-box-active");
    btn250.classList.remove("amount-box-active");
    btn500.classList.remove("amount-box-active");
}

function e100() {
    valor.value = 100;
    valor.style.borderBottomColor = "#e6b709"

    btn10.classList.remove("amount-box-active");
    btn25.classList.remove("amount-box-active");
    btn50.classList.remove("amount-box-active");
    btn100.classList.add("amount-box-active");
    btn250.classList.remove("amount-box-active");
    btn500.classList.remove("amount-box-active");
}

function e250() {
    valor.value = 250;
    valor.style.borderBottomColor = "#e6b709"

    btn10.classList.remove("amount-box-active");
    btn25.classList.remove("amount-box-active");
    btn50.classList.remove("amount-box-active");
    btn100.classList.remove("amount-box-active");
    btn250.classList.add("amount-box-active");
    btn500.classList.remove("amount-box-active");
}

function e500() {
    valor.value = 500;
    valor.style.borderBottomColor = "#e6b709"

    btn10.classList.remove("amount-box-active");
    btn25.classList.remove("amount-box-active");
    btn50.classList.remove("amount-box-active");
    btn100.classList.remove("amount-box-active");
    btn250.classList.remove("amount-box-active");
    btn500.classList.add("amount-box-active");
}

function e10lev() {
    valor2.value = 10;
    valor2.style.borderBottomColor = "#e6b709";

    btn10lev.classList.add("amount-box-active");
    btn25lev.classList.remove("amount-box-active");
    btn50lev.classList.remove("amount-box-active");
    btn100lev.classList.remove("amount-box-active");
    btn250lev.classList.remove("amount-box-active");
    btn500lev.classList.remove("amount-box-active");
}

function e25lev() {
    valor2.value = 25;
    valor2.style.borderBottomColor = "#e6b709"

    btn10lev.classList.remove("amount-box-active");
    btn25lev.classList.add("amount-box-active");
    btn50lev.classList.remove("amount-box-active");
    btn100lev.classList.remove("amount-box-active");
    btn250lev.classList.remove("amount-box-active");
    btn500lev.classList.remove("amount-box-active");
}

function e50lev() {
    valor2.value = 50;
    valor2.style.borderBottomColor = "#e6b709"

    btn10lev.classList.remove("amount-box-active");
    btn25lev.classList.remove("amount-box-active");
    btn50lev.classList.add("amount-box-active");
    btn100lev.classList.remove("amount-box-active");
    btn250lev.classList.remove("amount-box-active");
    btn500lev.classList.remove("amount-box-active");
}

function e100lev() {
    valor2.value = 100;
    valor2.style.borderBottomColor = "#e6b709"

    btn10lev.classList.remove("amount-box-active");
    btn25lev.classList.remove("amount-box-active");
    btn50lev.classList.remove("amount-box-active");
    btn100lev.classList.add("amount-box-active");
    btn250lev.classList.remove("amount-box-active");
    btn500lev.classList.remove("amount-box-active");
}

function e250lev() {
    valor2.value = 250;
    valor2.style.borderBottomColor = "#e6b709"

    btn10lev.classList.remove("amount-box-active");
    btn25lev.classList.remove("amount-box-active");
    btn50lev.classList.remove("amount-box-active");
    btn100lev.classList.remove("amount-box-active");
    btn250lev.classList.add("amount-box-active");
    btn500lev.classList.remove("amount-box-active");
}

function e500lev() {
    valor2.value = 500;
    valor2.style.borderBottomColor = "#e6b709"

    btn10lev.classList.remove("amount-box-active");
    btn25lev.classList.remove("amount-box-active");
    btn50lev.classList.remove("amount-box-active");
    btn100lev.classList.remove("amount-box-active");
    btn250lev.classList.remove("amount-box-active");
    btn500lev.classList.add("amount-box-active");
}

var selectTipo = document.getElementById("opTrans");
var selectPeriodo = document.getElementById("opPeriodo")

var tudo = document.getElementById("trans-tudo");
var lev = document.getElementById("trans-lev");
var dep = document.getElementById("trans-dep");
var ap = document.getElementById("trans-ap");
var ga = document.getElementById("trans-ga");
var vazio = document.getElementById("trans-vazio");

function showTrans() {
    var selectedTipo = selectTipo.options[selectTipo.selectedIndex].value;
    var selectedPeriodo = selectPeriodo.options[selectPeriodo.selectedIndex].value;

    if (1 == selectedTipo && (6 == selectedPeriodo || 1 == selectedPeriodo)) {
        lev.style.display = "none";
        dep.style.display = "none";
        ap.style.display = "none";
        ga.style.display = "none";
        vazio.style.display = "none"

        tudo.style.display = "flex";
    }
    else if (2 == selectedTipo && (6 == selectedPeriodo || 1 == selectedPeriodo)) {
        tudo.style.display = "none";
        dep.style.display = "none";
        ap.style.display = "none";
        ga.style.display = "none";
        vazio.style.display = "none"

        lev.style.display = "flex";
    }
    else if (3 == selectedTipo && (6 == selectedPeriodo || 1 == selectedPeriodo)) {
        tudo.style.display = "none";
        lev.style.display = "none";
        ap.style.display = "none";
        ga.style.display = "none";
        vazio.style.display = "none"

        dep.style.display = "flex";
    }
    else if (4 == selectedTipo && (6 == selectedPeriodo || 1 == selectedPeriodo)) {
        tudo.style.display = "none";
        lev.style.display = "none";
        dep.style.display = "none";
        ga.style.display = "none";
        vazio.style.display = "none"

        ap.style.display = "flex";
    }
    else if (5 == selectedTipo && (6 == selectedPeriodo || 1 == selectedPeriodo)) {
        tudo.style.display = "none";
        lev.style.display = "none";
        dep.style.display = "none";
        ap.style.display = "none";
        vazio.style.display = "none"

        ga.style.display = "flex";
    }
    else {
        tudo.style.display = "none";
        lev.style.display = "none";
        dep.style.display = "none";
        ap.style.display = "none";
        ga.style.display = "none";  
        
        vazio.style.display = "flex"
    }
}

var mes = document.getElementById("val1");
var ano = document.getElementById("val2");

var mes2 = document.getElementById("val3");
var ano2 = document.getElementById("val4");

function defCor() {
    var selectedMes = mes.options[mes.selectedIndex].value;
    var selectedAno = ano.options[ano.selectedIndex].value;
    var selectedMes2 = mes2.options[mes2.selectedIndex].value;
    var selectedAno2 = ano2.options[ano2.selectedIndex].value;

    if ("default" != selectedMes) {
        mes.classList.add("correctSelect");
    }
    else if ("default" === selectedMes)
    {
        mes.classList.remove("correctSelect");
    }

    if ("default" != selectedAno)
    {
        ano.classList.add("correctSelect");
    }
    else if ("default" === selectedAno)
    {
        ano.classList.remove("correctSelect");
    }

    if ("default" != selectedMes2) {
        mes2.classList.add("correctSelect");
    }
    else if ("default" === selectedMes2)
    {
        mes2.classList.remove("correctSelect");
    }

    if ("default" != selectedAno2)
    {
        ano2.classList.add("correctSelect");
    }
    else if ("default" === selectedAno2)
    {
        ano2.classList.remove("correctSelect");
    }
}

