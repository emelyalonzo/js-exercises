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

//Iteración #4
const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
    let sumAll = 0;
    for (let i = 0; i < array.length; i++) {
        sumAll += array[i];
    }
    return (sumAll / array.length);
}

//Iteración #5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) == "string") {
            result += array[i].length;
        } else if (typeof(array[i]) == "number") {
            result += array[i];
        }   
    }
    return result;
}

//Iteración #6
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda',
    'sushi'
];
function removeDuplicates(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (newArray.includes(array[i])) {
            continue;
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray
}

//Iteración #7
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function finderName(array, element) {
    if (array.includes(element)) {
        return true, array.indexOf(element);
    } else {
        return false;
    }
}

//Iteración #8
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
  
function repeatCounter(array) {
    let repetitions = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] in repetitions) {
        repetitions[array[i]] += 1;
        } else {
        repetitions[array[i]] = 1;
        }
    }
    return console.log(repetitions);
}

repeatCounter(counterWords);