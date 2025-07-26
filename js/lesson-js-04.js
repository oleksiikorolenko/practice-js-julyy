// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список

const body = document.querySelector('body');
console.log(body);
const title = document.querySelector('#title');
console.log(title);
const list = document.querySelector('.list');
console.log(list);
const topic = document.querySelectorAll('[data-topic]');
console.log(topic);
const topicFirst = document.querySelector('[data-topic]');
console.log(topicFirst);
const topicLast = document.querySelector('li:last-child[data-topic]');
console.log(topicLast);
const sibling = title.nextElementSibling;
console.log(sibling);
const allTitles = document.querySelectorAll('h3');
console.log(allTitles);

allTitles.forEach(title => title.classList.add('active'));



const navigation = document.querySelector('[data-topic = navigation]');
console.log(navigation);

navigation.setAttribute("style", "background-color: yellow");
const navigationTopic = navigation.querySelector('p');
navigationTopic.textContent = "Я змінив тут текст!";

console.log(navigationTopic.textContent);

const currentTopic = "manipulation";
const manipulation = document.querySelector(`[data-topic = ${currentTopic}]`);
console.log(manipulation);
manipulation.setAttribute("style", "background-color: lightblue");

let titleHasClassComp = null;
allTitles.forEach(title => {
    if (title.classList.contains('completed') === true) {
        titleHasClassComp = title;
      
    }
});

console.log(titleHasClassComp);

const li = titleHasClassComp.closest('li');
li.remove();

const paragraph = document.createElement('p');
paragraph.textContent = "Об'єктна модель документа (Document Object Model)";
title.append(paragraph);

// const newLiElem = document.createElement('li');
// const newHeader = document.createElement('h3');
// newHeader.textContent = "Властивість innerHTML";
// const newParagraph = document.createElement('p');
// newParagraph.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";
// newLiElem.append(newHeader, newParagraph);
// newLiElem.innerHTML = '<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу."</p>'
// list.append(newLiElem);

const newHeader = "Властивість innerHTML";
const newParagraph = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";

const markup = `<li><h3>${newHeader}</h3><p>${newParagraph}</p></li>`;

list.insertAdjacentHTML("beforeend", markup);

list.innerHTML = " ";






