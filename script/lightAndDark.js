var app = document.getElementById("app")
var sw = document.getElementById("ThemeSwitch")

sw.addEventListener("click", checkSwitch)

if (localStorage.getItem("darkMode") == "" || !localStorage.getItem("darkMode")) {
    localStorage.setItem("darkMode", "yes")
}

if (localStorage.getItem("darkMode") == "yes"){
    sw.setAttribute("checked", "checked")
}

if (localStorage.getItem("darkMode") == "no"){
    app.setAttribute("class", "light")
}


function checkSwitch() {
    if (sw.checked == true){
        localStorage.setItem("darkMode", "yes")
        app.setAttribute("class", "")
        app.removeAttribute("class")
    }else{
        localStorage.setItem("darkMode", "no")
        app.setAttribute("class", "light")
    }
}
