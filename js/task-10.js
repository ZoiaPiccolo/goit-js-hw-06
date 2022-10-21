function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	input: document.querySelector("#controls>input"),
	btnCreate: document.querySelector("button[data-create]"),
	btnDestroy: document.querySelector("button[data-destroy]"),
	boxes: document.querySelector("#boxes"),
};

const destroyBoxes = event => (refs.boxes.innerHTML = "");
refs.btnDestroy.addEventListener("click", destroyBoxes);

const createBoxes = amount => {
	let arrayDiv = [];
	for (let i = 0; i < amount; i += 1) {
		const div = document.createElement("div");
		div.style.width = `${30 + 10 * i}px`;
		div.style.height = `${30 + 10 * i}px`;
		div.style.backgroundColor = getRandomHexColor();
		arrayDiv.push(div);
	}
	return arrayDiv;
};

refs.btnCreate.addEventListener("click", () => {
	let elementsAdd = createBoxes(refs.input.value);
	return refs.boxes.append(...elementsAdd);
});


