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
console.log(mixStrings("cheese", "cake"));
console.log(mixStrings("therefore I am", "I think"));
console.log(
  mixStrings("Oranges with honey", "watermelon and apple with honey")
);

// Make a function that takes as parameter a number and splits it in digits.
// (10) => output: [1,0]
// (13.4) => output: [1,3,'.',4]
// (-13.4) => output: ['-',1,3,'.',4]
function separate(num) {
  let stringNumber = num.toString();
  let array = [];
  for (let i = 0; i < stringNumber.length; i++) {
    if (stringNumber[i] === ".") {
      array.push(".");
    } else if (stringNumber[i] === "-") {
      array.push("-");
    } else {
      array.push(Number(stringNumber[i]));
    }
  }
  return array;
}
console.log(separate(10));
console.log(separate(13.4));
console.log(separate(-13.4));

// Make a function that takes an array as parameters and checks if all elements are the
// same in value and type. If positive, returns true, if not returns false
// ([true, true, true, true]) => output: true
// (['10',10,10,10]) => output: false
function sameValue(array) {
  for (let i = 0; i < array.length; i++) {
    if (!(array[0] === array[i])) {
      return false;
    }
  }
  return true;
}
console.log(sameValue([true, true, true, true]));
console.log(sameValue(["10", 10, 10, 10]));

// Show in console an array of numbers sort descending
function sortDescending(array) {
  array.sort(function (a, b) {
    return b - a;
  });
  return array;
}
console.log(sortDescending([2, 3, 1, 34, 2, 342, 0.3]));

// Given an array show in console another array sort alphabetically
// ['b', 'c', 'd', 'a'] => output: ['a', 'b', 'c', 'd']
let array = ["b", "c", "d", "a"];
console.log(array.sort());

// Make a function that takes as parameter an array of strings and shows in console the longest string
// (['help', 'me']) => output: “help”
function longestString(array) {
  let longest = 0;
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      result = array[i];
      longest = array[i].length;
    }
  }
  return result;
}

console.log(longestString(["help", "me"]));
console.log(longestString(["hello world", "helloworld"]));

// Make a function that takes two arrays as parameters, mix them, remove duplicates, and sort ascending
function merge(array1, array2) {
  let mixed = array1.concat(array2);
  let withoutDuplicates = mixed.filter(
    (item, pos) => mixed.indexOf(item) === pos
  );
  withoutDuplicates.sort(function (a, b) {
    return a - b;
  });
  return withoutDuplicates;
}
console.log(merge([1, 2, 3, 0.3], [1, 4, 89, 2, 3, 0.1])); //output: [0.1, 0.3, 1, 2, 3, 4, 89]

// Make a function that takes as parameters an object and a property name, and deletes that property.
// If propertyName is 'country':
const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'North America' }
// => output: { city: 'Sacramento', state: 'California', continent: 'North America' }
function deleteProperty(object, propertyName) {
    delete object[propertyName];
    return object;
}
console.log(deleteProperty(myObj, 'country'));

// Shows in console, the value of city
console.log(myObj.city);

// Change the value '' for 'null' in these objects
// { a: 'a', b: 'b', c: '' }
// { a: '', b: 'b', c: ' ', d: 'd' }
// { a: 'a', b: 'b ', c: ' ', d: '' }
// => output: { a: 'a', b: 'b', c: null }

function deleteEmpty(object) {
    for (const prop in object) {
        if (object[prop] === '' || object[prop] === ' ') {
            object[prop] = null;
        }
    }
    return object
}
console.log(deleteEmpty({ a: '', b: 'b', c: ' ', d: 'd' }))