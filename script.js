
let btn = document.getElementById("btn_menu")

function menu (){
    let menu = document.getElementById("container-menu")

    if(menu.classList.contains("on")){
        menu.classList.remove("on")
        menu.classList.add("hidden")
        btn.classList.add("feito")
        setTimeout(function () {
            btn.classList.remove("feito") 
        },400)
        
        btn.innerHTML = `<img src="images/icon-hamburger.svg" alt="menu">`
        
    }else{
        menu.classList.remove("hidden")
        menu.classList.add("on")
        btn.classList.add("feito")
        setTimeout(function () {
            btn.classList.remove("feito") 
        },400)
        btn.innerHTML = `<img src="images/icon-close.svg" alt="menu">`
    }
}
btn.addEventListener("click", menu)