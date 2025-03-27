/* 2. Первые элементы массива

Напишите функцию на JavaScript для получения первого элемента массива.
Передавая параметр 'n', можно получить первые 'n' элементов массива.

Тестовые данные:
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

Ожидаемый вывод:
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]

 */

console.log("Task_2");

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