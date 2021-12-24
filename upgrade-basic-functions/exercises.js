//Iteración #1
function sum(numberOne , numberTwo) {
    if (numberOne < numberTwo) {
        console.log(numberTwo + " es el mayor");
    } else if (numberOne > numberTwo) {
        console.log(numberOne + " es el mayor");
    } else {
        console.log("Ninguno es mayor que el otro :S");
    }
}

//Iteración #2
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(array) {
    let longestLength = 0;
    let longestIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestLength) {
            longestLength = array[i].length;
            longestIndex = i;
        } else if (array[i].length == longestLength) {
            continue;
        }
    }
    return array[longestIndex];
}
console.log(findLongestWord(avengers));

//Iteración #3
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}