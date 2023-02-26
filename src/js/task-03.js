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

//Перебираємо масив об'єктів
for (const element of images) {
  //Створення елементу списку
  const list = document.createElement("li");

  //Створення елементу зображення
  const imageEl = document.createElement("img");

  //Додавання зображень з галереї масиву
  imageEl.src = element.url;
  imageEl.alt = element.alt;
  imageEl.width = 320;
  console.log(imageEl);
  galleryList.insertAdjacentHTML(
    "beforeend",
    `<li><img src = '${imageEl.src}' alt = '${imageEl.alt}' width = '${imageEl.width}'></li>`
  );
}
console.log(galleryList);
//Пошук всіх зображень
const photos = document.querySelectorAll(".imageEl");
//Стилізація зображень
galleryList.style.display = "flex";
galleryList.style.gap = "15px";
galleryList.style.listStyleType = "none";
galleryList.style.justifyContent = "center";
galleryList.style.alignItems = "center";
galleryList.style.backgroundColor = "blue";
galleryList.style.padding = "30px";
