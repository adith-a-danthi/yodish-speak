var txtInput = document.querySelector("#text-input");
var translateBtn = document.querySelector("#translate-button");
var outputDiv = document.querySelector("#translated-text");

const BASE_URL = "https://api.funtranslations.com/translate/yoda.json";

function clickHandler() {
	const query = txtInput.value;
	const url = `${BASE_URL}?text=${query}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			outputDiv.innerHTML = data.contents.translated;
		})
		.catch((error) => {
			console.log(error);
			alert("Oops! Something went wrong", error);
		});
}

translateBtn.addEventListener("click", clickHandler);
