// 1. Обмен значениями двух переменных (без третьей)
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log(a, b); // 10 5


// 2. Проверка чётного или нечётного числа
function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false


// 3. Сумма чисел от 1 до N
function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(5)); // 15


// 4. Переворот строки
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // olleh


// 5. Фильтрация массива по чётным числам
function filterEven(arr) {
  const result = [];

  for (let num of arr) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }

  return result;
}

console.log(filterEven([1, 2, 3, 4, 5, 6])); // [2, 4, 6]


// 6. Конвертер температуры
function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(fahrenheitToCelsius(32)); // 0


// 7. Проверка строки на палиндром
function isPalindrome(str) {
  const formatted = str
    .toLowerCase()
    .replaceAll(' ', '');

  const reversed = formatted.split('').reverse().join('');

  return formatted === reversed;
}

console.log(isPalindrome("Race car")); // true
console.log(isPalindrome("Hello")); // false


// 8. Сумма всех элементов массива (for)
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10


// 9. Найти самое длинное слово (for...of)
function longestWord(words) {
  let longest = "";

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}

console.log(longestWord(["apple", "banana", "kiwi"])); // banana


// 10. Подсчитать количество свойств в объекте (for...in)
function countProps(obj) {
  let count = 0;

  for (let key in obj) {
    count++;
  }

  return count;
}

console.log(countProps({ a: 1, b: 2, c: 3 })); // 3


// 11. Вывести числа от 1 до N (while)
function printTo(n) {
  let i = 1;

  while (i <= n) {
    console.log(i);
    i++;
  }
}

printTo(5);


// 12. Найти число в массиве вручную
function manualFindIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return undefined;
}

console.log(manualFindIndex([1, 2, 3], 2)); // 1
console.log(manualFindIndex([1, 2, 3], 5)); // undefined
