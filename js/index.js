const schemeSVG = document.querySelector('.scheme-svg');
const totalPriceTag = document.querySelector('.dollar');
const menuBTN = document.querySelector('.m-menu');

let price = 15;
let totalPrice = 0;
// let chicketPrice = document.querySelectorAll('.active');



schemeSVG.addEventListener('click', (e) => {
    if(!e.target.classList.contains('booked')){
        e.target.classList.toggle('active');
        let totalSeats = schemeSVG.querySelectorAll('.active').length;
        totalPrice = totalSeats * price;
        totalPriceTag.textContent = totalPrice;
        
    };
 
});

/*********************************/

const mobileMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('is-open');
};

menuBTN.addEventListener('click', mobileMenu);