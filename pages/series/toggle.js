document.getElementById("darkmode-toggle").onclick = function() {
    var checkbox = document.getElementById("darkmode-toggle");
    localStorage.setItem("val", checkbox.checked);
    var checked = JSON.parse(localStorage.getItem("val"));
    if (checked == true){
        document.body.style.backgroundColor = "#141114"
        document.body.style.backgroundImage = "none"
        document.body.style.color = "white"
        document.getElementById("home").style.color = "white"
        document.getElementById("mov2").style.color = "white"
        document.getElementById("se2").style.color = "white"
        let name = document.getElementById("name")
        name.style.backgroundColor = "#1a161a"
        name.style.border = "1px solid transparent;"
        name.style.color = "#ffff"
        let sea = document.getElementById("sea")
        sea.style.backgroundColor = "#1a161a"
        sea.style.border = "1px solid transparent;"
        sea.style.color = "#ffff"
        let epi = document.getElementById("epi")
        epi.style.backgroundColor = "#1a161a"
        epi.style.border = "1px solid transparent;"
        epi.style.color = "#ffff"
        let menu = document.getElementById("menu")
        menu.style.filter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(13deg) brightness(102%) contrast(102%)"
    } 
    else {
        document.body.style.backgroundImage = "url(assets/bg.png)"
        document.body.style.color = "black"
        document.body.style.backgroundColor = "none"
        document.getElementById("home").style.color = "black"
        document.getElementById("mov2").style.color = "black"
        document.getElementById("se2").style.color = "black"
        document.getElementById("menu").style.filter = ""
        document.getElementById("name").style.backgroundColor = "#ffff"
        document.getElementById("sea").style.backgroundColor = "#ffff"
        document.getElementById("epi").style.backgroundColor = "#ffff"
    }
}
var checkbox = document.getElementById("darkmode-toggle");
checked = JSON.parse(localStorage.getItem("val"));
console.log(checked)
checkbox.checked = checked
if (checked == true) {
    document.body.style.backgroundColor = "#141114"
    document.body.style.backgroundImage = "none"
    document.body.style.color = "white"
    document.getElementById("home").style.color = "white"
    document.getElementById("mov2").style.color = "white"
    document.getElementById("se2").style.color = "white"
    let name = document.getElementById("name")
    name.style.backgroundColor = "#1a161a"
    name.style.border = "1px solid transparent;"
    name.style.color = "#ffff"
    let sea = document.getElementById("sea")
    sea.style.backgroundColor = "#1a161a"
    sea.style.border = "1px solid transparent;"
    sea.style.color = "#ffff"
    let epi = document.getElementById("epi")
    epi.style.backgroundColor = "#1a161a"
    epi.style.border = "1px solid transparent;"
    epi.style.color = "#ffff"
    let menu = document.getElementById("menu")
    menu.style.filter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(13deg) brightness(102%) contrast(102%)"
}
else {
    document.body.style.backgroundImage = "url(assets/bg.png)"
    document.body.style.color = "black"
    document.body.style.backgroundColor = "none"
    document.getElementById("home").style.color = "black"
    document.getElementById("mov2").style.color = "black"
    document.getElementById("se2").style.color = "black"
    document.getElementById("menu").style.filter = ""
    document.getElementById("name").style.backgroundColor = "#ffff"
    document.getElementById("sea").style.backgroundColor = "#ffff"
    document.getElementById("epi").style.backgroundColor = "#ffff"
}