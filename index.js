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
    window.open("movie.html")
}
document.getElementById("gt").onclick = function() {
    window.open("https://github.com/NixonXC/sam-player")
}