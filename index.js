var menuList = document.getElementById("navMenu");
    menuList.style.maxHeight = "0px";
    function togglemenu(){
        if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "130px"
        }
        else {
            menuList.style.maxHeight = "0px"
    }
}
document.getElementById("mov").onclick = function() {
    window.location.href = "pages/movies/mov.html"
}
document.getElementById("gt").onclick = function() {
    window.location.href = "pages/series/tv.html"
}
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
    } 
    else {
        document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.2)), url(assets/bg.jpg)"
        document.body.style.color = "white"
        document.body.style.backgroundColor = "none"
        document.getElementById("home").style.color = "white"
        document.getElementById("mov2").style.color = "white"
        document.getElementById("se2").style.color = "white"
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
}
else {
    document.body.style.backgroundImage = "linear-gradient(rgba(0,0,0, 0.2), rgba(0,0,0, 0.2)), url(assets/bg.jpg)"
    document.body.style.color = "white"
    document.body.style.backgroundColor = "none"
    document.getElementById("home").style.color = "white"
    document.getElementById("mov2").style.color = "white"
    document.getElementById("se2").style.color = "white"
}