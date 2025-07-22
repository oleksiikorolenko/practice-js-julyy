// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];

// styles.push('rock-n-roll');

// console.log(styles);

// styles[1] = 'classic';

// console.log(styles);

// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
// console.log(`${i + 1}-${array[i]}`)
//     }
// };

// logItems(["apple", "banana", "orange"]);


// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

//  const logins = ["Peter", "John", "Igor", "Sasha"];


// function checkLogin(array){
//     const login = prompt('Enter login');

//     if (array.includes(login)) {
//         alert(`Welcome ${login}`)
//     } else {
//         alert('User not found')
//     }
// };

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...args) {
//     let sum = 0
//     let count = 0

//     for (let i = 0; i < args.length; i++) {
//         if (typeof args[i] === 'number') {
        
//             sum += args[i];
//             count++
        
//         };
        
//     };
//     return sum / count;
// }


// const fun = caclculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

// console.log(fun);

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


//  const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumNumbers(someArr) {
//     const newArr = [];
//     for (let i = 0; i < someArr.length - 1; i++){
//         const sum = someArr[i] + someArr[i + 1];
//         newArr.push(sum);
//     };

//     return newArr;
// }

// console.log(sumNumbers(someArr));


// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];


// function findSmallestNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//         return 'Sory, it is not an array!';
//     } else {
//         let min = numbers[0];
//         for (let i = 0; i < numbers.length - 1; i++){
//             if (numbers[i] < min) {
//                 min = numbers[i];
// }
//         }
//         return min;
//     }
    
// }


// console.log(findSmallestNumber(numbers));