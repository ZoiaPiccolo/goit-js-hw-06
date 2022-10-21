let inputRef = document.querySelector("#font-size-control");
let spanRef = document.querySelector("#text");

const onChangeFontSize = event => (spanRef.style.fontSize = event.currentTarget.value + "px");
inputRef.addEventListener("input", onChangeFontSize);
