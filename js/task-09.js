function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//Пошук елементів
const body = document.querySelector("body");
const bodyChangeColor = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

//Додаємо слухача подій
bodyChangeColor.addEventListener("click", (element) => {
  //Згенерований колір кожен раз
  let color = getRandomHexColor();
  //Змінює колір фона
  body.style.backgroundColor = color;
  //Виведення значення кольору в спан
  spanColor.textContent = color;
});
