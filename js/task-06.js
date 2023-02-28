//Пошук поля інпуту
const validationInput = document.querySelector("#validation-input");

//Додаємо слухачів подій
validationInput.addEventListener("blur", (event) => {
  //Порівнюємо кількість введених символів з значенням атрибута
  if (
    event.target.value.length === +validationInput.getAttribute("data-length")
  ) {
    validationInput.classList.add("valid");

    //Перевірка значення на валідність
    if (validationInput.classList.contains("invalid")) {
      validationInput.classList.remove("invalid");
    }
  } else {
    if (validationInput.classList.contains("valid")) {
      validationInput.classList.remove("valid");
    }
    validationInput.classList.add("invalid");
  }
});
