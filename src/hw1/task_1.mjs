/* 1. Клонирование массива

Напишите функцию на JavaScript для клонирования массива.

Тестовые данные:
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

Ожидаемый вывод:
[1, 2, 4, 0]
[1, 2, [4, 0]]

 */

console.log("Task_1");

function array_Clone(arr) {
    return arr.slice();
}

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));