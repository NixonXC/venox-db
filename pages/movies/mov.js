function new_list(mov_title, embed_url, poster) {
    let mov = document.createElement("div")
    mov.setAttribute("id", "new_list")
    let img = document.createElement("img")
    img.setAttribute("src", poster)
    let title = document.createElement("h3")
    title.innerHTML = mov_title
    title.setAttribute('id',"text");
    document.getElementById("new").appendChild(mov)
    let grp = document.getElementById("new_list")
    grp.appendChild(img)
    grp.appendChild(title)
    grp.onclick = function() {
        new_ifrm(embed_url=embed_url)
        document.title = document.title.replace("VENOX Movies", mov_title + " | VENOX MOVIES")
        document.getElementById("title").innerHTML = mov_title
        document.getElementById("navMenu").style.display = 'none'
        document.getElementById("movie").style.marginTop = '10px'
        document.getElementById("stp").style.display = 'inline-block'
        document.getElementById("stp").onclick = function() {
            window.location.reload()
        }
        document.getElementById("new_list").style.display = "none"
        document.getElementById("sug").style.display = "none"
        document.getElementById("mov").value = mov_title
    }
}
window.onload = async function start() {
    async function get_info(){
        let response = await fetch('https://vidsrc.me/movies/latest/page-1.json');
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
    let obj = Math.floor((Math.random()*50) + 1);
    let data = await get_info();
    let thedb = data["result"][obj]["imdb_id"]
    let post = await get_post(id=thedb);
    new_list(mov_title = data["result"][obj]["title"].replace(/[0-9]/g, ''), embed_url=data["result"][obj]["embed_url"], poster = post["data"]["movies"]["0"]["urlPoster"])
}
function new_ifrm(embed_url) {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", embed_url)
    ifrm.setAttribute("id", "player")
    ifrm.setAttribute("allowfullscreen", "true")
    ifrm.style.width = "800px";
    ifrm.style.height = "500px";
    ifrm.style.marginTop = "20px";
    document.body.appendChild(ifrm);
    document.getElementById("menu").style.display = "none";
}
function Ifrm(msg) {
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.alert("Please Rotate your Device or Fullscreen., ID: "  + msg)
    }
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
            document.getElementById("stp").onclick = function() {
                window.location.reload()
            }
            document.getElementById("new").style.display = "none"
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