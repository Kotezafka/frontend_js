/* 3. Последние элементы массива

Напишите функцию на JavaScript для получения последнего элемента массива.
Передавая параметр 'n', можно получить последние 'n' элементов массива.

Тестовые данные:
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

Ожидаемый вывод:
-2
[9, 0, -2]
[7, 9, 0, -2]

 */

console.log("Task_3");

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