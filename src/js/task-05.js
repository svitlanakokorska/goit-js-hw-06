//Пошук елементів
const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

//Додавання слухачів події
textInput.addEventListener("input", (event) => {
  //Поточне значення тексту інпута підставляємо в спан
  output.textContent = event.target.value;

  //Якщо інпут порожній, в спані відображається 'Anonymous'
  if (event.target.value === "") {
    output.textContent = "Anonymous";
  }
});
