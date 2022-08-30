document.getElementById("btn").onclick = function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.alert("Please Rotate your device for a better experience.")
    }
    id = document.getElementById("mov");
    msg = id.value;
    if (msg == null, msg.length < 9, msg.length > 9, msg == "") {
        msg = "tt1300854"
    }
    else {
        if(document.getElementById("player")){
            alert("Please Reload the page to start another player.");
        }
        else {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f96c60ec5emsh4b6451611214d81p14212fjsn9c2839c99d87',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            };
            fetch('https://imdb8.p.rapidapi.com/title/find?q=' + msg, options)
                .then(response => response.json())
                .then(response => document.getElementById("title").innerHTML = response["results"][0]["title"])
                .catch(err => console.error(err));
            document.getElementById("navMenu").style.display = 'none'
            document.getElementById("movie").style.marginTop = '10px'
            window.alert(msg)
            var ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", "https://vidsrc.me/embed/" + msg)
            ifrm.setAttribute("id", "player")
            ifrm.setAttribute("allowfullscreen", "true")
            ifrm.style.width = "800px";
            ifrm.style.height = "500px";
            ifrm.style.marginTop = "20px";
            document.body.appendChild(ifrm);
            document.getElementById("menu").style.display = "none";
    }
};}	
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