// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#Hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#Hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})