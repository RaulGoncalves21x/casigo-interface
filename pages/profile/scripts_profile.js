/* ----- ENG: Show Password Feature ----- */
/* ----- PT: Mostrar Palavra-Passe ----- */

var pass = document.getElementById("pass");
var btn = document.getElementById("olho");

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

function show_SavedInfo() {
  var output = document.getElementById("edit_saveInput");
  output.id = 'edit_saveInput_2';
  setTimeout(() => { window.location.href="profile-page.html";}, 1500);
}

/* ----- ENG: Verify Pop-Up----- */
/* ----- PT: Separador Verificação ----- */

var black = document.getElementById('opacityPopUp');
var body = document.body;
var verify = document.getElementById('verifyId');

function toggleSeparador() {
  body.classList.add("body_active")
  if (body.classList.contains("body_active"))
  {
    verify.style.display = "flex";
    black.classList.add("opacity_active")
  }
}

function esconderSeparador() {
  body.classList.remove("body_active")
  verify.style.display = "none";
  black.classList.remove("opacity_active")

  incorrect.style.display = "none"
  passInput.value == ""
}

var passInput = document.getElementById('passVer');
var correct = document.getElementById('correct');
var incorrect = document.getElementById('incorrect');

function checkPass() {
  console.log(passInput.value);
  if (passInput.value == "1234")
  {
    correct.style.display = "block"
    incorrect.style.display = "none"

    correct.style.color = "green"
    setTimeout(() => { window.location.href='edit-profile.html';}, 1500);
  }
  else
  {
    incorrect.style.display = "block"
    incorrect.style.color = "red"
    setTimeout(() => { incorrect.style.display = "none";}, 1000);
  }
}