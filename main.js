const btn =  document.querySelector('.toggle-menu');
const menu = document.querySelector('nav');
const links = document.querySelectorAll('.nav-links a');
const scrollTopBtn = document.querySelector('#scroll-top')
btn.addEventListener("click", showMenu);

 function showMenu(){

    menu.classList.toggle('show');
}

links.forEach( (link)=>{
    link.addEventListener("click",()=>{
        menu.classList.remove('show');
    })
})
window.onscroll =  ()=>{
   if (scrollY > 260) {
    scrollTopBtn.style.display = 'block';
   }
   else {
    scrollTopBtn.style.display = 'none';
   }
}
scrollTopBtn.addEventListener('click', ()=>{
        scrollTo(0,0);
})