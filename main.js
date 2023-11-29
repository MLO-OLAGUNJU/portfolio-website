const hamburbuger = document.querySelector('.hamburger');
const NavAside = document.querySelector('.nav-aside');

hamburbuger.addEventListener('click', () => {
    hamburbuger.classList.toggle('active');
    NavAside.classList.toggle('active');
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburbuger.classList.remove("active");
    NavAside.classList.remove("active");
}))























// const showNavItem = document.getElementById('showNavItem')

// function showNav (){
//     if (showNavItem.style.display === 'none'){
//         showNavItem.style.display = 'block'
//         // themenu.style.display = 'none'
//     } 
//     else {
//         showNavItem.style.display = 'none'
//         // theX.style.display = 
//     }

// }