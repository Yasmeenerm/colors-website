const menu = document.querySelector('#mobile-menu');//targeting id line #25
const menuLinks = document.querySelector('.navbar__menu'); //targeting entire UL that contains navbar links

//DISPLAY MOBILE MENU 
const mobileMenu = () => {
    menu.classList.toggle('is-active'); // true/false active/not active
    menuLinks.classList.toggle('active');
};

//add evet listener to track toggle of mobile menu
//param (action, function of what happens)
menu.addEventListener('click',mobileMenu);
