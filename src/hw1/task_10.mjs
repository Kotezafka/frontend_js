/* 10. Сумма и произведение элементов массива

Напишите программу на JavaScript для вычисления суммы и
произведения элементов массива целых чисел.

 */

console.log("Task_10");

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