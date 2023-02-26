const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

//Пошук списку
const list = document.querySelector("#ingredients");

//Створення пустого масиву
const container = [];

//Перебирання елементів
ingredients.forEach((element) => {
  // Створення елементу <li>
  const listItem = document.createElement("li");

  // Додавання назви інгредієнта всередину елемента <li>
  listItem.textContent = element;

  // Додавання класу item до кожного елемента <li>
  listItem.classList.add("item");

  //Додавання елемента в порожній масив container
  container.push(listItem);
});

//Додавання масиву з елементами в середину списка
list.append(...container);
