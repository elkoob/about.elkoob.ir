var app = document.getElementById("app")
var langDiv = document.getElementsByClassName("lang-choose").item(0)
console.log(langDiv)
// sw.addEventListener("click", checkSwitch)

if (localStorage.getItem("lang") == "" || !localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en")
}

// if (localStorage.getItem("darkMode") == "yes"){
//     sw.setAttribute("checked", "checked")
// }

// if (localStorage.getItem("darkMode") == "no"){
//     app.setAttribute("class", "light")
// }

// app.setAttribute("class", localStorage.getItem("lang"))
app.classList.add(localStorage.getItem("lang"))

for (let index = 0; index < langDiv.childElementCount; index++) {
    // const element = langDiv.children.item(index);
    langDiv.children.item(index).addEventListener("click", () => {setLang(langDiv.children.item(index).getAttribute("lang"))})
}

function setLang(lang) {
    if (localStorage.getItem("lang") != lang){
        app.classList.remove(localStorage.getItem("lang"))
        localStorage.setItem("lang", lang)
        app.classList.add(lang)
    }
}
