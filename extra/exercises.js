// Function that returns true if a number is an integer, and false if not
function integerNumber(num) {
    return Number.isInteger(num);
}

// Crea una función que tome como parámetros dos strings, puedes llamarlos a y b. Si
// a contiene b, añade b al principio de a. Si no, añade b al final. Por ejemplo:
// (“cheese”, “cake”) => output: “cheesecake”
// (“Java”, “script”) => output: “JavaScript”
// (“therefore I am”, “I think”) => output: “I think, therefore I am”
function mixStrings(a, b) {
    let arrayA = a.split(" ");
    let arrayB = b.split(" ");
    arrayB.forEach(elementB => {
        if (a.includes(elementB)){
            return b + a;
        }
    });
    return a + b;
}
console.log(mixStrings('cheese', 'cake'));
console.log(mixStrings('therefore I am', 'I think'));
