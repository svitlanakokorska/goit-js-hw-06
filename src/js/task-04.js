//Створення і ініціалізація лічильника
let counterValue = 0;

//Пошук елементів
let counter = document.querySelector("#value");
const decrementEl = document.querySelector('button[data-action = "decrement"]');
const incrementEl = document.querySelector('button[data-action = "increment"]');

//Додаємо слухачів кліків до кнопок
decrementEl.addEventListener("click", () => {
  counterValue -= 1; //Зменшуємо значення лічильника на 1
  counter.textContent = counterValue; //Відображаємо поточне значення лічильника
});

//Додаємо слухачів кліків до кнопок
incrementEl.addEventListener("click", () => {
  counterValue += 1; //Збільшуємо значення лічильника на 1
  counter.textContent = counterValue; //Відображаємо поточне значення лічильника
});
