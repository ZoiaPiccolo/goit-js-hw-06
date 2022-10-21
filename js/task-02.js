const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

for (let i = 0; i < ingredients.length; i += 1) {
	const listIngredients = document.querySelector("#ingredients");
	const ingredient = document.createElement("li");
	ingredient.textContent = ingredients[i];
	ingredient.classList.add("item");

	listIngredients.append(ingredient);
}
