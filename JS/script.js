let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
let zomotosmalllogo = document.querySelector("#zomatosmLogo");
let zomotosmalllogoimg = document.querySelector("#zomatosmLogo img");
let arrow = document.querySelector(".downarrow i");
menu.style.color = "white"
menu.innerHTML = "<i class='fa-solid fa-bars'></i>";
if (window.innerWidth <= 750){
        menu.style.transition = `all 1s ease-in-out`;
        zomotosmalllogo.style.transition = `all 3s ease-in-out`;
        zomotosmalllogoimg.style.transition = `all 3s ease-in-out`;
        navbar.style.transition = `all 0.6s ease-in-out`;
}

menu.addEventListener("click",() => {
    navbar.classList.toggle("navbarBack");
    

    if (menu.style.color === "white"){
        menu.style.color = "black";
        menu.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    }
    else {
        menu.style.color = "white";
        menu.innerHTML = "<i class='fa-solid fa-bars'></i>";
    }
    console.log("Menu clicked");
})