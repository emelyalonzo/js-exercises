/*  Exercise 01 Basics 
*/

var avengers = ['Spiderman', 'AntMan', 'Hulk'];
var mutants = ['Wolverine', 'Ciclops', 'Storm'];
var defenders = ['Daredevil', 'IronFist', 'Luke Cage'];

const calcListLength = (list) => {
    var myLength = 0;
    list.forEach(element => {
        myLength = myLength + element.length;
    });
    return myLength;
}

var avengersLength = calcListLength(avengers);
var mutantsLength = calcListLength(mutants);
var defendersLength = calcListLength(defenders);
 
var comparator = (a,b,c) => {
    if (a > b) {
        if (a == c)
          return 'Empate entre a y c';
        if (a > c)
          return 'a gana';
        else
          return 'c gana';
      } else {
        if (a == b)
          return 'Empate entre a y b';
        if (b > c)
          return 'b gana';
        else
          return 'c gana';
      }
}

//console.log(comparator(avengersLength,mutantsLength, defendersLength));

const media = (a,b,c) => {
    return a+b+c / 3
}
//console.log(media(avengersLength,mutantsLength, defendersLength));

/* 
Return the longest string
*/
let fruits = ['Orange','Lemon','Watermelon','Peach','Apple','Kiwi'];

function longest (array) {
    let longestElement = "";
    array.forEach(element => {
        if (longestElement.length < element.length) {
            longestElement = element
        }
    });
    return longestElement;
}

console.log(longest(fruits));

/* 
Returns whether if someone can drive
*/
let age = 18;
if (age >= 18) {
    console.log("Can drive")
} else {
    console.log("Can't drive")
}


/* 
I want to eat pizza
*/
let meals = ["marshmellows", "pizza", "sushi", "poke", "roastbeef"]
let diet = true;

meals.forEach(element => {
    if((diet === true) && (element === "pizza")) {
        console.log("Brocoli");
    } else if ((diet === true) && (element !== "pizza")) {
        console.log("Brocoli")
    } else if ((diet === false) && (element === "pizza")) {
        console.log("Pizza")
    } else  {
        console.log("Pizza")
    }
});

/* 
E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R
*/
let rayoWord = "El rayo es el mejor"
rayoWord = rayoWord.toUpperCase();
rayoWord = rayoWord.replace(/ /g,'');
let rayoArray = rayoWord.split('')
console.log(rayoArray.join('-'));


/* 
1
22
333
4444
55555
666666
7777777
88888888
999999999
*/
function createPyramid (steps) {
    let pyramid = '';
    for (let step = 1; step <= steps; step++) {
        for(let i = 1; i <= step; i++){
            pyramid = pyramid.concat(step.toString());
        }
        pyramid = pyramid.concat('\n');
    }
    console.log(pyramid);
};
createPyramid(9);

/* 
999999999
88888888
7777777
666666
55555
4444
333
22
1
*/
function createPyramidReverse(steps) {
    let pyramid = '';
    for (let step = steps; step >= 1; step--) {
        for(let i = 1; i <= step; i++){
            pyramid = pyramid.concat(step.toString());
        }
        pyramid = pyramid.concat('\n');
    }
    console.log(pyramid);
};
createPyramidReverse(9);
/* 
* Palindrome
*/

const palindrome = (word) => {
    let initialWord = word.toUpperCase().replace(/ /g,'');
    let reverseWord = initialWord.split('').reverse().join('');
    return initialWord === reverseWord ? true : false;
}
console.log(palindrome('yo soY') ? 'Es palíndromo' : 'NO es palíndromo');