/* This Project is made for Educational Purposes only
Last Updated: 2022 October */

function Ifrm(msg, seas, epis) { /* This function is used to create the Iframe player */
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.alert("Please Rotate your Device or Fullscreen., ID: "  + msg + ", Ad Blocker Recommended for an ad free experience.")
    }
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://2embed.org/embed/series?imdb=" + msg + "&s=" + seas + "&e=" + epis)
    ifrm.setAttribute("id", "player")
    ifrm.setAttribute("allowfullscreen", "true")
    ifrm.setAttribute("Same-Site", "none")
    ifrm.style.width = "800px";
    ifrm.style.height = "500px";
    ifrm.style.marginTop = "20px";
    document.body.appendChild(ifrm);
    document.getElementById("menu").style.display = "none";
}
document.getElementById("btn").onclick = async function() { /* This function is used to check if the user has clicked the watch button or not. */
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
                player.src = "https://2embed.org/embed/series?imdb=" + ile["results"][0]["id"].slice(7, 17).replace("/", "") + "&s=" + se + "&e=" + finep
            }
            document.getElementById("back").onclick = function() {
                let player = document.getElementById("player")
                se = sea.value;
                ep = epi.value;
                document.getElementById("epi").value = parseInt(ep) - 1;
                let finep = document.getElementById("epi").value;
                player.src = "https://2embed.org/embed/series?imdb=" + ile["results"][0]["id"].slice(7, 17).replace("/", "") + "&s=" + se + "&e=" + finep
            }
    }
};}
document.getElementById("stp").onclick = function() {
    window.location.reload()
}
var menuList = document.getElementById("navMenu"); /* Navbar for Responsive css */
    menuList.style.maxHeight = "0px";
    function togglemenu(){
        if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "130px"
        }
        else {
            menuList.style.maxHeight = "0px"
    }
}