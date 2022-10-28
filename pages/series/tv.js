/* This Project is made for Educational Purposes only
Last Updated: 2022 September */

function Ifrm(msg, seas, epis, title, plot, date, genres, rating, episode, image_url) { /* This function is used to create the Iframe player */
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.alert("Please Rotate your Device or Fullscreen., ID: "  + msg)
    }
    var ifrm = document.createElement("iframe")
    ifrm.setAttribute("src", "https://vidsrc.me/embed/" + msg + "/" + seas + "-" + epis)
    ifrm.setAttribute("id", "player")
    ifrm.setAttribute("allowfullscreen", "true")
    ifrm.setAttribute("Same-Site", "none")
    ifrm.style.width = "800px";
    ifrm.style.height = "500px";
    ifrm.style.marginTop = "20px";
    play = document.getElementById("play")
    play.appendChild(ifrm)
    let il = document.createElement("h1");
    il.setAttribute("id", "title")
    il.innerHTML = title + ": " + episode
    play.appendChild(il)
    play.insertBefore(ifrm, play.firstChild)
    let ep = document.createElement("p")
    ep.innerHTML = "<b>Season:</b> " + seas + "," + " <b>Episode:</b> " + epis
    play.appendChild(ep)
    let p = document.createElement("p")
    p.innerHTML = plot
    p.style.width = "800px"
    play.appendChild(p)
    let year = document.createElement("p")
    year.innerHTML = "<b>Release Year:</b> " + date
    play.appendChild(year)
    let cat = document.createElement("p")
    cat.innerHTML = "<b>Genres:</b> " + genres
    play.appendChild(cat)
    let rat = document.createElement("p")
    rat.innerHTML = "<b>Rating:</b> " + rating + "/10"
    play.appendChild(rat)
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
                    'X-RapidAPI-Key': 'f96c60ec5emsh4b6451611214d81p14212fjsn9c2839c99d87',
                    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
                }
            };
            const opt2 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'f96c60ec5emsh4b6451611214d81p14212fjsn9c2839c99d87',
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
            async function get_season(id){
                let response = await fetch('https://imdb8.p.rapidapi.com/title/get-seasons?tconst=' + id, opt2);
                let data = await response.json();
                data = JSON.stringify(data);
                data = JSON.parse(data);
                return data;
            }
            async function get_post(id){
                let response = await fetch('https://www.myapifilms.com/imdb/idIMDB?idIMDB=' + id + '&token=c236aee8-d43d-4646-bc9f-edac76062307');
                let data = await response.json();
                data = JSON.stringify(data);
                data = JSON.parse(data);
                return data;
            }
            let ile = await get_data();
            let sezen = await get_season(id=ile["results"][0]["id"].slice(7, 17).replace("/", ""))
            let dat = await get_post(id=ile["results"][0]["id"].slice(7, 17).replace("/", ""))
            console.log(sezen)
            console.log(dat)
            ep2 = parseInt(ep) - 1
            se2 = parseInt(se) - 1
            episode_no = sezen[se2]["episodes"][ep2]["title"]
            Ifrm(msg=ile["results"][0]["id"].slice(7, 17).replace("/", ""), seas=se, epis=ep, title=ile["results"][0]["title"], plot=dat["data"]["movies"][0]["plot"], date=dat["data"]["movies"][0]["releaseDate"].slice(0, 4), genres=dat["data"]["movies"][0]["genres"], rating = dat["data"]["movies"][0]["rating"], episode=episode_no)
            document.title = document.title.replace("VENOX Series", ile["results"][0]["title"] + " | VENOX SERIES")
            document.getElementById("movie").style.marginTop = '10px'
            document.getElementById("next").style.display = 'inline-block'
            document.getElementById("back").style.display = 'inline-block'
            document.getElementById("btn").style.display = 'none'
            document.getElementById("movie").style.display = 'none'
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