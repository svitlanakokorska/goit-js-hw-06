const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//Пошук списку
const galleryList = document.querySelector(".gallery");

//Перебираємо масив об'єктів, створюємо елемент списку з фотографією
const htmlMarkup = images
  .map(
    (image) =>
      `<li><img class="photo" src="${image.url}" width="320" alt="${image.alt}"></li>`
  )
  .join(""); //прибираємо кому
//Створення розмітки
galleryList.insertAdjacentHTML("beforeend", htmlMarkup);

//Пошук всіх зображень
const photos = document.querySelectorAll(".photo");
//Стилізація зображень
galleryList.style.display = "flex";
galleryList.style.gap = "15px";
galleryList.style.listStyleType = "none";
galleryList.style.justifyContent = "center";
galleryList.style.alignItems = "center";
galleryList.style.backgroundColor = "blue";
galleryList.style.padding = "30px";
