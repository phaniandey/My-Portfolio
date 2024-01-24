//Navbar JS
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active')
    menu.classList.toggle('active')

}

//scroll animation
const sr = ScrollReveal({
    origin:'top',
    distance:'85px',
    duration:2000,
    reset:true 
})

sr.reveal('#home')
sr.reveal('#about')
sr.reveal('#services')
sr.reveal('#work')
sr.reveal('#contact')
