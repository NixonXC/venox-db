function Ifrm(msg, seas, epis) {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.alert("Please Rotate your Device or Fullscreen., ID: "  + msg)
    }
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://vidsrc.me/embed/" + msg + "/" + seas + "-" + epis)
    ifrm.setAttribute("id", "player")
    ifrm.setAttribute("allowfullscreen", "true")
    ifrm.setAttribute("Same-Site", "none")
    ifrm.style.width = "800px";
    ifrm.style.height = "500px";
    ifrm.style.marginTop = "20px";
    document.body.appendChild(ifrm);
    document.getElementById("menu").style.display = "none";
}
document.getElementById("btn").onclick = async function() {
    id = document.getElementById("name");
    epi = document.getElementById("epi");
    sea = document.getElementById("sea");
    msg = id.value;
    ep = epi.value;
    se = sea.value;
    if (msg == null, msg.length < 9, msg.length > 9, msg == "") {
        return
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
            Ifrm(msg=ile["results"][0]["id"].slice(7, 17).replace("/", ""), seas=se, epis=ep)
            document.title = document.title.replace("VENOX Series", ile["results"][0]["title"] + " | VENOX SERIES")
            document.getElementById("title").innerHTML = ile["results"][0]["title"]
            document.getElementById("navMenu").style.display = 'none'
            document.getElementById("movie").style.marginTop = '10px'
            document.getElementById("stp").style.display = 'block'
            document.getElementById("next").style.display = 'inline-block'
            document.getElementById("back").style.display = 'inline-block'
            document.getElementById("btn").style.display = 'none'
            document.getElementById("next").onclick = function() {
                let player = document.getElementById("player")
                se = sea.value;
                ep = epi.value;
                document.getElementById("epi").value = parseInt(ep) + 1;
                let finep = document.getElementById("epi").value;
                player.src = "https://vidsrc.me/embed/" + ile["results"][0]["id"].slice(7, 17).replace("/", "") + "/" + se + "-" + finep
            }
            document.getElementById("back").onclick = function() {
                let player = document.getElementById("player")
                se = sea.value;
                ep = epi.value;
                document.getElementById("epi").value = parseInt(ep) - 1;
                let finep = document.getElementById("epi").value;
                player.src = "https://vidsrc.me/embed/" + ile["results"][0]["id"].slice(7, 17).replace("/", "") + "/" + se + "-" + finep
            }
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
function myFunction() {
    var checkBox = document.getElementById("darkmode-toggle");
    if (checkBox.checked == true){
        document.body.style.backgroundColor = "#141114"
        document.body.style.backgroundImage = "none"
        document.body.style.color = "white"
        document.getElementById("home").style.color = "white"
        document.getElementById("mov2").style.color = "white"
        document.getElementById("se2").style.color = "white"
        document.getElementById("name").style.backgroundColor = "#1a161a"
        document.getElementById("name").style.border = "1px solid transparent;"
        document.getElementById("sea").style.backgroundColor = "#1a161a"
        document.getElementById("sea").style.border = "1px solid transparent;"
        document.getElementById("epi").style.backgroundColor = "#1a161a"
        document.getElementById("epi").style.border = "1px solid transparent;"
        document.getElementById("menu").style.filter = "invert(100%) sepia(0%) saturate(0%) hue-rotate(13deg) brightness(102%) contrast(102%)"
    } else {
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