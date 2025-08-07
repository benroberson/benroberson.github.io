
const queryString = window.location.search;
var urlString;
if (queryString === "?nocount")
	urlString = "https://api.countapi.xyz/get/utkbrobers3/views-02";
else
	urlString = "https://api.countapi.xyz/hit/utkbrobers3/views-02";
	
var xhr = new XMLHttpRequest();
xhr.open("GET", urlString);
xhr.responseType = "json";
xhr.onload = function () {
	console.log("view count: " + this.response.value);
}
xhr.send();

function reset() {
	var xhr1 = new XMLHttpRequest();
	xhr1.open("GET", "https://api.countapi.xyz/set/utkbrobers3/views-02?value=0");
	xhr1.responseType = "json";
	xhr1.onload = function() {
		console.log("reset view count=" + this.response.value );
		var xhr2 = new XMLHttpRequest();
		xhr2.open("GET", "https://api.countapi.xyz/update/utkbrobers3/viewsall?amount=" + this.response.old_value );
		xhr2.responseType = "json";
		xhr2.onload = function() { console.log("total view count=" + this.response.value ); }
		xhr2.send();
	}
	xhr1.send();
}