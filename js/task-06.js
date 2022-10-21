let textInput = document.querySelector("#validation-input");
let symbolQuantity = textInput.getAttribute("data-length");

textInput.addEventListener("blur", () => {
	if (textInput.value.length === Number(symbolQuantity)) {
		textInput.classList.remove("invalid");
		textInput.classList.add("valid");
	} else {
		textInput.classList.remove("valid")
		textInput.classList.add("invalid");
	}
});
