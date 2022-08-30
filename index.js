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
    window.open("pages/movies/mov.html")
}
document.getElementById("gt").onclick = function() {
    window.open("pages/database/db.html")
}