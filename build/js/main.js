const initApp = ()=>{
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = ()=>{
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerIcon.classList.toggle('toggle-btn');
    }
    hamburgerIcon.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}
document.addEventListener('DOMContentLoaded',initApp);