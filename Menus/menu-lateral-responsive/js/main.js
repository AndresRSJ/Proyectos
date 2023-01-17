const menu__icon=document.getElementById("menu__icon")
const nav__menu=document.getElementById("nav__menu")

menu__icon.addEventListener("click", ()=>{
    nav__menu.classList.toggle("menu--show")
})