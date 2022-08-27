document.getElementById("btn").onclick = function() {
    id = document.getElementById("mov");
    msg = id.value;
    if (msg == null, msg.length < 9, msg.length > 9, msg == "") {
        msg = "tt1300854"
    }
    else {
        window.alert(msg)
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://vidsrc.me/embed/" + msg)
        ifrm.setAttribute("id", "player")
        ifrm.style.width = "800px";
        ifrm.style.height = "500px";
        document.body.appendChild(ifrm);
    }
};