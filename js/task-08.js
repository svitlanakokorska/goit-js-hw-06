//Пошук форми
const form = document.querySelector("form.login-form");

//Додавання слухача події
form.addEventListener("submit", handleSubmit);
//Функція відправки форми
function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  //Перевірка чи заповнені всі поля
  if (email.value === "" || password.value === "") {
    return alert("Заповни всі поля!");
  }
  //Виведення об'єкту із введеними полями
  console.log({ email: email.value, password: password.value });
  //Очищення значення полів форми
  event.currentTarget.reset();
}
