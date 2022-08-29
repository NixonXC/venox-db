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
document.getElementById("btn").onclick = function() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'f96c60ec5emsh4b6451611214d81p14212fjsn9c2839c99d87',
			'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
		}
	};
	id = document.getElementById("name");
	msg = id.value;
	fetch('https://imdb8.p.rapidapi.com/title/find?q=' + msg, options)
	.then(response => response.json())
	.then(response => window.alert(response["results"][0]["id"].slice(7, 16)))
	.catch(err => console.error(err));
}
