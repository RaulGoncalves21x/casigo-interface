var login = document.getElementById("login");
var registar = document.getElementById("registar");

var title = document.getElementById("title");

function mostrar_registar() {
  login.style.display = "none";
  registar.style.display = "flex";

  title.innerHTML = "CasiGO | Criar Conta";
}

function mostrar_login() {
  login.style.display = "flex";
  registar.style.display = "none";

  title.innerHTML = "CasiGO | Iniciar Sessão";

}

var pass = document.getElementById("pass");
var btn = document.getElementById("olho");

var pass2_0 = document.getElementById("pass2_0");
var pass2_1 = document.getElementById("pass2_1");
var btn2 = document.getElementById("olho2");
var btn3 = document.getElementById("olho3");

function showPass() {
  pass.classList.toggle("show");
  
  if (pass.classList.contains("show")) {
    pass.setAttribute("type", "text");
    btn.classList = "bi bi-eye-slash"
  }
  else {
    pass.setAttribute("type", "password");
    btn.classList = "bi bi-eye"
  }
}

function showPass2() {
  pass2_0.classList.toggle("show");

  if (pass2_0.classList.contains("show")) {
    pass2_0.setAttribute("type", "text");
    btn2.classList = "bi bi-eye-slash"
  }
  else {
    pass2_0.setAttribute("type", "password");
    btn2.classList = "bi bi-eye"
  }
}

function showPass3() {
  pass2_1.classList.toggle("show");

  if (pass2_1.classList.contains("show")) {
    pass2_1.setAttribute("type", "text");
    btn3.classList = "bi bi-eye-slash"
  }
  else {
    pass2_1.setAttribute("type", "password");
    btn3.classList = "bi bi-eye"
  }
}