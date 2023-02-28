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
  const userInfo = {
    email: email.value,
    password: password.value,
  };
  //Виведення об'єкту із введеними полями
  console.log(userInfo);

  //Очищення значення полів форми
  event.currentTarget.reset();
}
