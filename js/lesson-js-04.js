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

// const body = document.querySelector('body');
// console.log(body);
// const title = document.querySelector('#title');
// console.log(title);
// const list = document.querySelector('.list');
// console.log(list);
// const topic = document.querySelectorAll('[data-topic]');
// console.log(topic);
// const topicFirst = document.querySelector('[data-topic]');
// console.log(topicFirst);
// const topicLast = document.querySelector('li:last-child[data-topic]');
// console.log(topicLast);
// const sibling = title.nextElementSibling;
// console.log(sibling);
// const allTitles = document.querySelectorAll('h3');
// console.log(allTitles);

// allTitles.forEach(title => title.classList.add('active'));



// const navigation = document.querySelector('[data-topic = navigation]');
// console.log(navigation);

// navigation.setAttribute("style", "background-color: yellow");
// const navigationTopic = navigation.querySelector('p');
// navigationTopic.textContent = "Я змінив тут текст!";

// console.log(navigationTopic.textContent);

// const currentTopic = "manipulation";
// const manipulation = document.querySelector(`[data-topic = ${currentTopic}]`);
// console.log(manipulation);
// manipulation.setAttribute("style", "background-color: lightblue");

// let titleHasClassComp = null;
// allTitles.forEach(title => {
//     if (title.classList.contains('completed') === true) {
//         titleHasClassComp = title;
      
//     }
// });

// console.log(titleHasClassComp);

// const li = titleHasClassComp.closest('li');
// li.remove();

// const paragraph = document.createElement('p');
// paragraph.textContent = "Об'єктна модель документа (Document Object Model)";
// title.append(paragraph);

// const newLiElem = document.createElement('li');
// const newHeader = document.createElement('h3');
// newHeader.textContent = "Властивість innerHTML";
// const newParagraph = document.createElement('p');
// newParagraph.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";
// newLiElem.append(newHeader, newParagraph);
// newLiElem.innerHTML = '<h3>Властивість innerHTML</h3><p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу."</p>'
// list.append(newLiElem);

// const newHeader = "Властивість innerHTML";
// const newParagraph = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";

// const markup = `<li><h3>${newHeader}</h3><p>${newParagraph}</p></li>`;

// list.insertAdjacentHTML("beforeend", markup);



// list.innerHTML = " ";

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const numberContainer = document.createElement('div');
// numberContainer.classList.add('number-container');



// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// for (let i = 0; i < 100; i++) {
//         const number = randomNumber();
//         const newDiv = document.createElement('div');
//         newDiv.classList.add('number');
//         if (number % 2 === 0) {
//             newDiv.classList.add('even')
//         } else { newDiv.classList.add('odd') };
// }

// console.log(i);

// newDiv.innerHTML = markup;

//===========================================================================================

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.


const userNameInput = document.querySelector('.js-username-input');
const form = document.querySelector('.js-contact-form');
const span = document.querySelector('.js-username-output');
const checkbox = document.querySelector('.js-policy-checkbox')

userNameInput.addEventListener('input', e => {
    const value = e.target.value.trim();
    span.textContent = value === '' ? "Anonymous" : value;
  

    if (value.length > 6) {
        userNameInput.classList.add('success');
        userNameInput.classList.remove('error');
    } else {
        userNameInput.classList.add('error');
        userNameInput.classList.remove('success');
    }
});

userNameInput.addEventListener('focus', e => {
    const value = e.target.value.trim();
    
    if (value === '') {
        userNameInput.style.outline = '3px solid red';

    } else {
        userNameInput.style.outline = '3px solid green';
}

});
userNameInput.addEventListener('blur', e => {
    const value = e.target.value.trim();
    
    if (value === '') {
        userNameInput.style.outline = '3px solid red';

    } else {
        userNameInput.style.outline = '3px solid lime';
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = userNameInput.value.trim()
    const checkBoxValue = checkbox.checked;
    
    
    if (inputValue == '' || !checkBoxValue) {
        alert('Please enter username and click checkbox');
        return
    }

    const data = { inputValue };
    console.log(data);

    form.reset();
    span.textContent = "Anonymous";

});


 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
 
const increaseBtn = document.querySelector('.js-increase');
const decreaseBtn = document.querySelector('.js-decrease');
const box = document.querySelector('.box');

let size = 50;
box.style.width = size + 'px';
box.style.height = size + 'px';


increaseBtn.addEventListener('click', () => {
    size += 20
    box.style.width = size + 'px';
    box.style.height = size + 'px';
})
decreaseBtn.addEventListener('click', () => {
    if (size > 20) {
        size -= 20;
        box.style.width = size + 'px';
        box.style.height = size + 'px';
    }
})





 






