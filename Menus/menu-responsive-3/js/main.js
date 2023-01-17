const menu=document.getElementById("menu")
const menu__icon=document.getElementById("menu__icon")

menu__icon.addEventListener("click", ()=>{
    menu.classList.toggle("view-menu")
})