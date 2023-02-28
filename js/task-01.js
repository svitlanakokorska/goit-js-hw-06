// Пошук елементів
const listItem = document.querySelectorAll(".item");

// Виведення кількості елементів li.item
console.log(`Number of categories: ${listItem.length}`);

// Перебирання елементів .item
listItem.forEach((element) => {
  // Виведення тексту заголовку <h2>
  console.log(`Category: ${element.firstElementChild.textContent}`);

  // Виведення кількості елементів в категорії (усіх <li>)
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
