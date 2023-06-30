let btn = document.getElementById("btn_nav_bar")

function menu() {

    let menu = document.getElementById("menu")
    let img_menu = document.getElementById("img_button")

    if(menu.classList.contains("on")){
        menu.classList.remove("on")
        menu.classList.add("hidden")
        img_menu.setAttribute("src", `images/icon-hamburger.svg`)
    }else{
        menu.classList.remove("hidden")
        menu.classList.add("on")
        img_menu.setAttribute("src", `images/icon-close.svg`)
    }
}

btn.addEventListener("click", menu)