const nav_menu = document.getElementById("nav-menu");
const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");

menu1.addEventListener("click", function(){
    nav_menu.classList.toggle("hidden");
})

menu2.addEventListener("click", function(){
    nav_menu.classList.toggle("hidden");
})