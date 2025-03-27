/* 12. Вывод цветов с порядковыми номерами

У нас есть следующие массивы:
color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
o = ["th", "st", "nd", "rd"]
Напишите программу на JavaScript для отображения цветов в следующем формате:
"1st choice is Blue."
"2nd choice is Green."
"3rd choice is Red."
Примечание: Используйте порядковые числительные для указания их позиции.

 */

console.log("Task_12");

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