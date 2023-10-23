// SHOW MENU 
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    // Validate variables
    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu-id');


// REMOVE MENU MOBILE
const navLink = document.querySelectorAll(".nav-link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu-id");
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => {n.addEventListener('click', linkAction)});


// SCROLL 
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

window.addEventListener('scroll', scrollActive);


// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const nav = document.getElementById('header');
    
    if (this.scrollY >= 200) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
