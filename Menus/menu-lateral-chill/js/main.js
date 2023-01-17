const menu__icon = document.getElementById("icon__menu")
const menu       = document.getElementById("bar")
const mode       = document.getElementById("mode")

menu__icon.addEventListener("click", ()=>{
    menu.classList.toggle("show__menu")
})

mode.addEventListener("click", (event) =>{
    event.preventDefault()
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true")
    }else{
        localStorage.setItem("dark-mode", "false")
    }
})

if(localStorage.getItem("dark-mode")==="true"){
    document.body.classList.add("dark");
}else{
    document.body.classList.remove("dark");
}