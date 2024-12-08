// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = [
// { id: 0, name: "Apple" },
// { id: 1, name: "Tomat" },
// { id: 2, name: "Cherry" },
// { id: 3, name: "Orange" },
// ];

// const frutsName = fruts.map(fruts => fruts.name);

// console.log(frutsName);


// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i++){
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }


// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.log( `цифра ${i}!` );
// }

// let i = 0;

// while (i < 5) {
//     console.log(`цифра ${i}!`);
//     i++
// }


// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let num

// do {
//     num = prompt("Введіть число більше за 100", 0);
// } while (num <= 100 && num);


// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];

// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let Оля = { name: "Оля", age: 23 };
// let Аня = { name: "Аня", age: 29};
// let Юля = { name: "Юля", age: 10 };
// let Катя = { name: "Катя", age: 20 };

// let arr = [Оля, Аня, Юля, Катя];

// alert(getAverageAge(arr));