const btn =  document.querySelector('.toggle-menu');
const menu = document.querySelector('nav');

btn.addEventListener("click", showMenu);

 function showMenu(){

    menu.classList.toggle('show');
}