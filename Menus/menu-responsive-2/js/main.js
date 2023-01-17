const menu__icon =document.getElementById("burger")
const menu =document.getElementById("menu")

menu__icon.addEventListener("click", ()=>{
    menu.classList.toggle("view-menu")
})