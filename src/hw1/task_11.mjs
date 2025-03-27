/* 11. Удаление дубликатов

Напишите программу на JavaScript для удаления дублирующихся
элементов из массива (игнорируя чувствительность к регистру).

 */

console.log("Task_11");

function removeDuplicatesIgnoreCase(arr) {
    const uniqueElements = new Set();

    for (const element of arr) {
        const lowerCaseElement =
            typeof element === "string" ? element.toLowerCase() : element;
        uniqueElements.add(lowerCaseElement);
    }
    const arrFromSet = Array.from(uniqueElements);
    return arrFromSet;
}

const arrDuplicates = ["a", "b", "A", "c", "B", "d", "a", "e"];
const arrFromSet = removeDuplicatesIgnoreCase(arrDuplicates);
console.log(arrFromSet);