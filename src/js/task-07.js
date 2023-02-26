//Пошук елементів
const inputFontSize = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

//Додаємо слухача подій
inputFontSize.addEventListener("input", (event) => {
  //Змінюємо розмір тексту
  spanText.style.fontSize = `${event.target.value}px`;
});
