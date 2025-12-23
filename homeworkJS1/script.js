/*Две переменные типа строка*/
let textString = "Привет, это просто текст";
let numberAsString = "25"; // цифра в текстовом формате

/*Переменная типа число*/
let numberValue = 10;

/*Преобразование строки с числом в число и сложение*/
let convertedNumber = Number(numberAsString);
let sum = convertedNumber + numberValue;

console.log("Результат сложения:", sum);

/*Переменная типа объект*/
let user = {
  name: "Bella",
  age: 20
};

/*вывод значения объекта в консоль*/
console.log("Имя из объекта:", user.name);

/*Переменная типа массив*/
let fruits = ["Апельсин", "Клубника"];

/*вывод значений массива по отдельности*/
console.log("Первый элемент массива:", fruits[0]);
console.log("Второй элемент массива:", fruits[1]);
