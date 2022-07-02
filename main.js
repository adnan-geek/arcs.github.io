const btn =  document.querySelector('.toggle-menu');
const menu = document.querySelector('nav');
const links = document.querySelectorAll('.nav-links a');
btn.addEventListener("click", showMenu);

 function showMenu(){

    menu.classList.toggle('show');
}

links.forEach( (link)=>{
    link.addEventListener("click",()=>{
        menu.classList.remove('show');
    })
})