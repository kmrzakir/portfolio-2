// Select the button element
const  hamBurger = document.getElementById("hamBurger");
const nav_ul  = document.getElementById("nav-ul")
const hamberGur_icon = document.getElementById("hamberGur_icon")

hamBurger.addEventListener("click",() => {

    nav_ul.classList.toggle("active");
    
    // toggle between hamburger and cross icon
    if(hamberGur_icon.classList.contains("fa-bars"))
    {
        hamberGur_icon.classList.replace("fa-bars","fa-xmark");
    }
    else
    {
        hamberGur_icon.classList.replace("fa-xmark","fa-bars");
    }

})