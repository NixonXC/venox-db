function Ifrm(msg) {
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
document.getElementById("btn").onclick = async function() {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.alert("Please Rotate your device.")
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
                    'X-RapidAPI-Key': '4ffb9786abmsh437351fac8c9f9ap18645djsn6d8ce573f426',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            };
            async function get_data(){
                let response = await fetch('https://imdb8.p.rapidapi.com/title/find?q=' + msg, options);
                let data = await response.json();
                data = JSON.stringify(data);
                data = JSON.parse(data);
                return data;
            }
            let ile = await get_data();
            Ifrm(msg=ile["results"][0]["id"].slice(7, 17).replace("/", ""))
            document.title = document.title.replace("VENOX Movies", ile["results"][0]["title"] + " | VENOX MOVIES")
            document.getElementById("title").innerHTML = ile["results"][0]["title"]
            document.getElementById("navMenu").style.display = 'none'
            document.getElementById("movie").style.marginTop = '10px'
            document.getElementById("stp").style.display = 'inline-block'
    }
};}
document.getElementById("stp").onclick = function() {
    window.location.reload()
}
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