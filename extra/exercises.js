// Function that returns true if a number is an integer, and false if not
function integerNumber(num) {
    return Number.isInteger(num);
}

// Make a function that takes as parameters two strings 'a' and 'b' and returns another string:
// if 'a' contains something of 'b', and the position of that value in common in 'b' is smaller 
// than position in 'a', then the result is 'b' before 'a'. If 'a' do not contains something of 'b',
// then the result is 'a' before 'b'.
// Examples:
// (“cheese”, “cake”) => output: “cheesecake”
// (“Java”, “script”) => output: “JavaScript”
// (“therefore I am”, “I think”) => output: “I think, therefore I am”
// (“Oranges with honey”, “watermelon and apple with honey”) => output: “Oranges with honeywatermelon and apple with honey”
function mixStrings(a, b) {
    let arrayA = a.split(" ");
    let arrayB = b.split(" ");

    for (let i = 0; i < arrayB.length; i++) {
        if (arrayA.includes(arrayB[i])) {
            if (arrayA.indexOf(arrayB[i]) > i) {
                return b + ", " + a;
            }
        }
    }
    return a + b;
}
console.log(mixStrings('cheese', 'cake'));
console.log(mixStrings('therefore I am', 'I think'));
console.log(mixStrings('Oranges with honey', 'watermelon and apple with honey')); 

// Make a function that takes as parameter a number and splits it in digits.
// (10) => output: [1,0]
// (13.4) => output: [1,3,'.',4]
// (-13.4) => output: ['-',1,3,'.',4]
function separate(num) {
    let stringNumber = num.toString();
    let array = [];
    for (let i = 0; i < stringNumber.length; i++) {
        if (stringNumber[i] === ".") {
            array.push (".");
        } else if (stringNumber[i] === "-"){
            array.push ("-");
        } else {
            array.push(Number(stringNumber[i]));
        }
    }
    return array;
}
console.log(separate(10));
console.log(separate(13.4));
console.log(separate(-13.4));