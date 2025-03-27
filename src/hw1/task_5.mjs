/* 5. Вставка дефисов между четными числами

Напишите программу на JavaScript, которая принимает число
в качестве ввода и вставляет дефисы (-) между каждым чётным числом.
Например, если ввести 025468, вывод должен быть 0-254-6-8.

 */

console.log("Task_5");

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
console.log(resultTask5_1); // Выведет "0-2-54-6-8"

const str2 = "24688";
const resultTask5_2 = correctStr(str2);
console.log(resultTask5_2); // Выведет "2-4-6-8-8"

const str3 = "13579";
const resultTask5_3 = correctStr(str3);
console.log(resultTask5_3); // Выведет "13579" (без изменений)