/* 7. Самый частый элемент массива

Напишите программу на JavaScript для нахождения самого частого элемента в массиве.

Пример массива:
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

Ожидаемый вывод:
a ( 5 раз )

 */

console.log("Task_7");

function findMostElement(arr) {
    const dictCount = {};
    for (const element of arr) {
        if (element in dictCount) {
            dictCount[element] += 1;
        } else {
            dictCount[element] = 1;
        }
    }

    // console.log(dictCount);
    let maxCount = 0;
    let mostCommonElement = null;

    for (const element in dictCount) {
        if (dictCount[element] > maxCount) {
            maxCount = dictCount[element];
            mostCommonElement = element;
        }
    }
    return { maxCount, mostCommonElement };
}

const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const resultTask7 = findMostElement(arr);
console.log(`${resultTask7.mostCommonElement} ( ${resultTask7.maxCount} раз )`);