(function(){
    AOS.init()
}()) ; 

// Efecto de cambio en el header al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});