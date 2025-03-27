/* 9. Сумма квадратов элементов массива

Напишите программу на JavaScript для нахождения
суммы квадратов чисел в массиве.

 */

console.log("Task_9");

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