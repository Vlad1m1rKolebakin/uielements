document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header ").classList.toggle("open")
    })
})
// закрывает меню при нажатии esc 

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape"){
        document.querySelector(".header").classList.remove("open")
    }
})


// закрыть меню пр  клике вне его

document.getElementById("menu").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});
document.getElementById("burger").addEventListener('click', event => {
    event._isClickWithInMenu = true;
});

document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;

    document.querySelector(".header").classList.remove("open")
});

