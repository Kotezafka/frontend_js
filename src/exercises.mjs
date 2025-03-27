// Умение работать с массивами - это важный навык
// при разработке React-приложений. Часто нужно отрисовать
// список элементов, сделать сортировку или фильтрацию.
// С помощью этих уражнений вы сможете научиться работать
// с массивами на JavaScript, а также привыкнуть к синтаксису
// нового языка программирования.

// Вы можете выполнять упражнения как в песочнице codesandbox,
// так и у себя на компьютере. Чтобы начать работать в codesandbox:
// 1. нажмите Sign In в правом верхнем углу,
// 2. зарегистрируйтесь по гугл-почте или гитхабу,
// 3. затем нажмите Fork также в правом верхнем углу.
// У вас появится своя копия проекта для работы.

// Для работы на своем комьпьютере
// склонируйте репозиторий https://github.com/ivannetreba/foundation-of-frontend.git

//
// ЗАДАЧИ
//

// 1. Клонирование массива

// Напишите функцию на JavaScript для клонирования массива.

// Тестовые данные:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Ожидаемый вывод:
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

console.log("Task_1");

function array_Clone(arr) {
  return arr.slice(0);
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

// 2. Первые элементы массива

// Напишите функцию на JavaScript для получения первого элемента массива.
// Передавая параметр 'n', можно получить первые 'n' элементов массива.

// Тестовые данные:
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Ожидаемый вывод:
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

console.log("\n\nTask_2");

function first(arr, n) {
  if (arr == null) {
    return void 0;
  }
  if (n == null) {
    return arr[0];
  }
  if (n < 0) {
    return [];
  }
  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// 3. Последние элементы массива

// Напишите функцию на JavaScript для получения последнего элемента массива.
// Передавая параметр 'n', можно получить последние 'n' элементов массива.

// Тестовые данные:
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// Ожидаемый вывод:
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

console.log("\n\nTask_3");

function last(arr, n) {
  if (n === undefined) {
    return arr[arr.length - 1];
  }
  if (n >= arr.length) {
    return arr.slice();
  }
  return arr.slice(-n);
}

console.log(last([7, 9, 0, -2])); // -2
console.log(last([7, 9, 0, -2], 3)); // [9, 0, -2]
console.log(last([7, 9, 0, -2], 6)); // [7, 9, 0, -2]

// 4. Соединение элементов массива

// Напишите простую программу на JavaScript для объединения
// всех элементов следующего массива в строку.

// Пример массива: `myColor = ["Red", "Green", "White", "Black"];`

// Ожидаемый вывод:
// "Red,Green,White,Black"
// "Red+Green+White+Black"

console.log("\n\nTask_4");

const myColor = ["Red", "Green", "White", "Black"];
const resultTask4_1 = myColor.join();
console.log(resultTask4_1);

const resultTask4_2 = myColor.join("+");
console.log(resultTask4_2);

// 5. Вставка дефисов между четными числами

// Напишите программу на JavaScript, которая принимает число
// в качестве ввода и вставляет дефисы (-) между каждым чётным числом.
// Например, если ввести 025468, вывод должен быть 0-254-6-8.

console.log("\n\nTask_5");

function correctStr(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (arr[i] % 2 === 0) {
      if (i == arr.length - 1) {
        break;
      }
      result.push("-");
    }
  }
  return result.join("");
}

const str1 = "025468";
const resultTask5_1 = correctStr(str1);
console.log(resultTask5_1); // Выведет "0-254-6-8"

const str2 = "24688";
const resultTask5_2 = correctStr(str2);
console.log(resultTask5_2); // Выведет "2-4-6-8-8"

const str3 = "13579";
const resultTask5_3 = correctStr(str3);
console.log(resultTask5_3); // Выведет "13579" (без изменений)

// 6. Сортировка массива

// Напишите программу на JavaScript для сортировки элементов массива.

// Пример массива:
// const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// Ожидаемый вывод:
// -4,-3,1,2,3,5,6,7,8

console.log("\n\nTask_6");

function sortArrNumbers(arr) {
  arr.sort((a, b) => a - b); // По возрастанию
  return arr;
}

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const resultTask6 = sortArrNumbers(arr1);
console.log(resultTask6);

// 7. Самый частый элемент массива

// Напишите программу на JavaScript для нахождения самого частого элемента в массиве.

// Пример массива:
// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Ожидаемый вывод:
// a ( 5 раз )

console.log("\n\nTask_7");

function findMostElement(arr) {
  const dictCount = {};
  for (const element of arr) {
    if (element in dictCount) {
      dictCount[element] += 1;
    } else {
      dictCount[element] = 1;
    }
  }

  // console.log(dictCount);
  let maxCount = 0;
  let mostCommonElement = null;

  for (const element in dictCount) {
    if (dictCount[element] > maxCount) {
      maxCount = dictCount[element];
      mostCommonElement = element;
    }
  }
  return { maxCount, mostCommonElement };
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const resultTask7 = findMostElement(arr);
console.log(`${resultTask7.mostCommonElement} ( ${resultTask7.maxCount} раз )`);

// 8. Переключение регистра в строке

// Напишите программу на JavaScript, которая принимает строку и
// меняет регистр каждого символа.
// Например, если ввести 'The Quick Brown Fox',
// вывод должен быть 'tHE qUICK bROWN fOX'.

console.log("\n\nTask_8");

function invertStringCase(str) {
  let strArr = str.split("");
  return strArr
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}

const str = "The Quick Brown Fox";
const resultTask8 = invertStringCase(str);
console.log(resultTask8);

// 9. Сумма квадратов элементов массива

// Напишите программу на JavaScript для нахождения
// суммы квадратов чисел в массиве.

console.log("\n\nTask_9");

function countSumSquares(arrNumbers) {
  let sumSquaresNumbers = 0;
  for (const element of arrNumbers) {
    sumSquaresNumbers += element ** 2;
  }
  return sumSquaresNumbers;
}

const arrNumbers = [2, 3, 3];
const sumSquaresNumbers = countSumSquares(arrNumbers);
console.log(`Сумма квадратов элементов массива равна ${sumSquaresNumbers}`);

// 10. Сумма и произведение элементов массива

// Напишите программу на JavaScript для вычисления суммы и
// произведения элементов массива целых чисел.

console.log("\n\nTask_10");

function countSumProduct(arrNumbers1) {
  let sumNumbers = 0;
  let productNumbers = 1;
  for (const element of arrNumbers1) {
    sumNumbers += element;
    productNumbers *= element;
  }
  return { sumNumbers, productNumbers };
}

const arrNumbers1 = [2, 3, 3];
const resultTask10 = countSumProduct(arrNumbers1);
console.log(
  `Сумма элементов массива равна ${resultTask10.sumNumbers},\nПроизведение элементов массива равно ${resultTask10.productNumbers}`
);

// 11. Удаление дубликатов

// Напишите программу на JavaScript для удаления дублирующихся
// элементов из массива (игнорируя чувствительность к регистру).

console.log("\n\nTask_11");

function removeDuplicatesIgnoreCase(arr) {
  const uniqueElements = new Set();

  for (const element of arr) {
    const lowerCaseElement =
      typeof element === "string" ? element.toLowerCase() : element;
    uniqueElements.add(lowerCaseElement);
  }
  const arrFromSet = Array.from(uniqueElements);
  return arrFromSet;
}

const arrDuplicates = ["a", "b", "A", "c", "B", "d", "a", "e"];
const arrFromSet = removeDuplicatesIgnoreCase(arrDuplicates);
console.log(arrFromSet);

// 12. Вывод цветов с порядковыми номерами

// У нас есть следующие массивы:
// color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// o = ["th", "st", "nd", "rd"]
// Напишите программу на JavaScript для отображения цветов в следующем формате:
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."
// Примечание: Используйте порядковые числительные для указания их позиции.

console.log("\n\nTask_12");

function inputColorAndNumber(color, o) {
  let i = 1;
  let arrColorAndNumber = [];
  for (const element of color) {
    let end = "";
    if (i < 4) {
      end = o[i];
    } else {
      end = o[0];
    }
    arrColorAndNumber.push(`${i}${end} choice is ${element}.`);
    i += 1;
  }

  return arrColorAndNumber;
}

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const o = ["th", "st", "nd", "rd"];

const arrColorAndNumber = inputColorAndNumber(color, o);
console.log(arrColorAndNumber);
