// Task1
console.log("Task 1");
const categoriesList = document.querySelector("#categories");
const categories = categoriesList.children;
console.log(`У списку ${categories.length} категорії.`);
const categoriesItems = document.querySelectorAll(".item");
categoriesItems.forEach(element => {
    console.log(`Категорія: ${element.firstElementChild.textContent}`);
    console.log(`Кількість елементів: ${element.lastElementChild.children.length}`);
});

// Task2
const ingredientsList = document.querySelector("#ingredients");
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
];
ingredients.forEach(ingredient => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    ingredientsList.append(itemEl);
});

// Task3
const galleryList = document.querySelector("#gallery");
const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
];
let result = "";
images.forEach(obj => {
    result += `<li><img src=${obj.url} alt='${obj.alt}' class="gallery-photo"></li>`;
});
galleryList.insertAdjacentHTML("afterbegin", result);

// Task4
let counterValue = 0;
const showValue = document.querySelector("#value");
const plusBtn = document.querySelector(`button[data-action="increment"]`);
const minusBtn = document.querySelector(`button[data-action="decrement"]`);
plusBtn.onclick = function(){
    counterValue++;
    showValue.textContent = counterValue;
}
minusBtn.onclick = function(){
    counterValue--;
    showValue.textContent = counterValue;
}