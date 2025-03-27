/* 8. Переключение регистра в строке

Напишите программу на JavaScript, которая принимает строку и
меняет регистр каждого символа.
Например, если ввести 'The Quick Brown Fox',
вывод должен быть 'tHE qUICK bROWN fOX'.

 */

console.log("Task_8");

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