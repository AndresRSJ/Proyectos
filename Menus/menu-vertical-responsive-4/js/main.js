const burger=document.getElementById("burger")
const menu=document.getElementById("menu__page")
const title__menu=document.getElementById("menu__title")

burger.addEventListener("click", ()=>{
    menu.classList.toggle("show__menu")
    title__menu.classList.toggle("view__title")
})