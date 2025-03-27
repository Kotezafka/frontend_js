/* 6. Сортировка массива

Напишите программу на JavaScript для сортировки элементов массива.

Пример массива:
const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

Ожидаемый вывод:
-4,-3,1,2,3,5,6,7,8

 */

console.log("Task_6");

function sortArrNumbers(arr) {
    arr.sort((a, b) => a - b); // По возрастанию
    return arr;
}

const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const resultTask6 = sortArrNumbers(arr1);
console.log(resultTask6);