const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

// Перше  рішення

// const listImages = document.querySelector(".gallery");
// const listElements = images.map(image => {
// 	const imgEl = document.createElement("img");
// 	imgEl.src = image.url;
// 	imgEl.alt = image.alt;
// 	imgEl.width = 220;
// 	const galleryItem = document.createElement("li");
// 	galleryItem.classList.add("gallery-item");
// 	galleryItem.append(imgEl);
// 	listImages.style.listStyle = "none";
// 	listImages.style.display = "flex";
// 	listImages.style.flexWrap = "wrap";
// 	listImages.style.gap = "30";
// 	return galleryItem;
// });

// listImages.append(...listElements);
// console.log(listImages);

// Друге рішення

// const listImages = document.querySelector(".gallery");
// const createGalleryItem = ({ url, alt }) => `<li><img src = "${url}" alt = "${alt}" width = 220></li>`;
// const galleryElements = images.reduce((acc, item) => acc + createGalleryItem(item), "");

// listImages.insertAdjacentHTML("beforeend", galleryElements);

// Третє рішення

const listImages = document.querySelector(".gallery");
const ListItem = images
	.map(image => {
		const url = image.url;
		const alt = image.alt;
		return `<li class ="gallery-item"><img src = "${url}" alt = "${alt}" width = 220></li>`;
	})
	.join("");

listImages.insertAdjacentHTML("beforeend", ListItem);
