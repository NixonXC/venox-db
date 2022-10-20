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
        menu.style.filter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(13deg) brightness(102%) contrast(102%)"
        let mov = document.getElementById("mov")
        mov.style.backgroundColor = "#1a161a"
        mov.style.border = "1px solid transparent;"
        mov.style.color = "#ffff"
    } else {
        document.body.style.backgroundImage = "url(assets/bg.png)"
        document.body.style.color = "black"
        document.body.style.backgroundColor = "none"
        document.getElementById("home").style.color = "black"
        document.getElementById("mov2").style.color = "black"
        document.getElementById("se2").style.color = "black"
        document.getElementById("menu").style.filter = ""
        let mov = document.getElementById("mov")
        mov.style.backgroundColor = "#ffff"
        mov.style.color = "black"
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
        menu.style.filter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(13deg) brightness(102%) contrast(102%)"
        let mov = document.getElementById("mov")
        mov.style.backgroundColor = "#1a161a"
        mov.style.border = "1px solid transparent;"
        mov.style.color = "#ffff"
}
else {
    document.body.style.backgroundImage = "url(assets/bg.png)"
    document.body.style.color = "black"
    document.body.style.backgroundColor = "none"
    document.getElementById("home").style.color = "black"
    document.getElementById("mov2").style.color = "black"
    document.getElementById("se2").style.color = "black"
    document.getElementById("menu").style.filter = ""
    let mov = document.getElementById("mov")
    mov.style.backgroundColor = "#ffff"
    mov.style.color = "black"
}