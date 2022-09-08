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
document.getElementById("btn").onclick = async function() {
	id = document.getElementById("name");
	msg = id.value;
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
	document.getElementById("result").innerHTML = ile["results"][0]["id"].slice(7, 17.).replace("/", "")
	document.getElementById("copy").style.display = "block"
}
function copyText(text) {
	navigator.clipboard.writeText(text);
}
function copyTextFromElement() {
	let element = document.getElementById("result");
	let elementText = element.textContent;
	copyText(elementText);
	setTimeout(() => {
		alert("Copied Code: " + elementText)
	}, 0);
}