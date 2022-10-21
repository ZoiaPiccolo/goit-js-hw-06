const list = document.querySelector("#categories");

const listItem = document.querySelectorAll(".item");

console.log(`Number of categories: ${listItem.length}`);

for (let i = 0; i < listItem.length; i += 1) {
	const nameCategory = listItem[i].querySelector("h2").textContent;
	const elemCategory = listItem[i].querySelectorAll("ul li").length;
	console.log(`Category: ${nameCategory}`);
	console.log(`Elements: ${elemCategory}`);
}
