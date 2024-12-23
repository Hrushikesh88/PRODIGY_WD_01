var typed= new Typed(".multiple-text",{
    strings:["Student","Full Stack Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

const menuToogle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToogle.addEventListener('click',() => {
    navbar.classList.toggle('active');
});