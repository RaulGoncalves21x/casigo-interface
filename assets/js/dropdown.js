// Função de mostrar o dropdown menu

let button = document.querySelector('.iconImage_navbar');
let dropdown_menu = document.querySelector('.dropdown_menu');

button.addEventListener("click",()=>{
  dropdown_menu.classList.toggle('dropdown_menu2');
});

// ------ Mostrar Estatísticas -------
function ativar() {

  //PROGRESS BAR
  const progressBar = document.querySelector('.progress-bar')
  progressBar.setAttribute('id', 'progress_animation')


  var hide = document.querySelector(".hide");
  var img = document.querySelector(".circle-button-img");

  if (hide.style.display === "none" || hide.style.display === "") {
    hide.style.display = "block";
    img.style.transform = "rotate(180deg)";
  } else if (hide.style.display === "block") {
    hide.style.display = "none";
    img.style.transform = "none";
  }
}