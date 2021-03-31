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
app.classList.add("lang-" + localStorage.getItem("lang"))

loadLangPack(localStorage.getItem("lang"))

for (let index = 0; index < langDiv.childElementCount; index++) {
    // const element = langDiv.children.item(index);
    langDiv.children.item(index).addEventListener("click", () => {setLang(langDiv.children.item(index).getAttribute("lang"))})
}

function setLang(lang) {
    if (localStorage.getItem("lang") != lang){
        app.classList.remove("lang-" + localStorage.getItem("lang"))
        localStorage.setItem("lang", lang)
        app.classList.add("lang-" + lang)
        loadLangPack(lang)
    }
}

function loadLangPack(lang) {
    var xhr = new XMLHttpRequest()
    var url = "./lang/" + lang + ".json"

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resp = JSON.parse(this.responseText)
            addLangInPage(resp)
        }
    };
    xhr.open("GET", url, true)
    xhr.send()
    
}

function addLangInPage(arr) {
    var keys = Object.keys(arr)
    
    for (let index = 0; index < keys.length; index++) {
        document.getElementById(keys[index]).innerHTML = arr[keys[index]]
        
    }
}