function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonColor = document.querySelector(".change-color");
let spanRef = document.querySelector(".color");

buttonColor.addEventListener("click", onChangeColor);

function onChangeColor(event) {
	let color = getRandomHexColor();
	document.body.style.backgroundColor = color;
	spanRef.textContent = color;
};
