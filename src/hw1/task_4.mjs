/* 4. Соединение элементов массива

Напишите простую программу на JavaScript для объединения
всех элементов следующего массива в строку.

Пример массива: `myColor = ["Red", "Green", "White", "Black"];`

Ожидаемый вывод:
"Red,Green,White,Black"
"Red+Green+White+Black"

 */

console.log("Task_4");

const myColor = ["Red", "Green", "White", "Black"];
const resultTask4_1 = myColor.join();
console.log(resultTask4_1);

const resultTask4_2 = myColor.join("+");
console.log(resultTask4_2);