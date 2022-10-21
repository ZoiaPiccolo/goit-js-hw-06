let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const span = document.querySelector("#value");

const onBtnDecrement = () => {
	counterValue -= 1;
	span.textContent = counterValue;
};

const onBtnIncrement = () => {
	counterValue += 1;
	span.textContent = counterValue;
};
btnDecrement.addEventListener("click", onBtnDecrement);
btnIncrement.addEventListener("click", onBtnIncrement);
