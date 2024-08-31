const menu1 = document.getElementById("menu1");
const menu2 = document.getElementById("menu2");
const nav_menu = document.getElementById("nav-menu");

menu1.addEventListener("click", function(){
    nav_menu.classList.toggle("hidden");
})

menu2.addEventListener("click", function(){
    nav_menu.classList.toggle("hidden");
})

const password = document.getElementById("password");
const eye = document.getElementById("eye");

eye.addEventListener("click", function(){
    if(password.type == "password"){
        password.type = "text";
        eye.classList.add("fa-eye");
    }

    else{
        password.type = "password";
        eye.classList.remove("fa-eye");
    }
})

const guest = document.getElementById("guest");

guest.addEventListener("click", function(){
    alert("Kamu login sebagai guest");
})

