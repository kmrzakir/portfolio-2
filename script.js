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

// JavaScript to dynamically add 'active' class based on the current page URL
// document.querySelectorAll("ul li a").forEach(link => {
//     if (link.href === window.location.href) {
//         link.classList.add("active");
//     }
// });
