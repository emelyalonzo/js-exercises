//#1
function integerNumber(num) {
  return Number.isInteger(num);
}
console.log(integerNumber(3));
console.log(integerNumber(2.6));





//#2
function mixStrings(a, b) {
  if (a.includes(b)) {
    return b + " " + a;
  } else {
    return a + b;
  }
}
console.log(mixStrings("cheese", "cake"));
console.log(mixStrings("think, therefore I am", "I"));







//#3
function separate(num) {
  let stringNumber = String(num);
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
console.log(separate(0.4));







//#4
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









//#5
function sortDescending(array) {
  array.sort((a, b) => {
    return b - a;
  });
  return array;
}
console.log(sortDescending([2, 3, 1, 34, 2, 342, 0.3]));









//#6
let array = ["b", "c", "d", "a"];
console.log(array.sort());







//#7
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
console.log(longestString(["two", "four"]));
console.log(longestString(["hello world", "helloworld"]));








//#8
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
console.log(merge([1, 2, 3, 3, 0.3], [1, 4, 89, 2, 3, 0.1])); //output: [0.1, 0.3, 1, 2, 3, 4, 89]








//#9
const myObj = { city: 'Sacramento', state: 'California', country: 'USA', continent: 'North America' }
// => output: { city: 'Sacramento', state: 'California', continent: 'North America' }
function deleteProperty(object, propertyName) {
    delete object[propertyName];
    return object;
}
console.log(deleteProperty(myObj, 'country'));








//#10
console.log(myObj.city);





//#11
function deleteEmpty(object) {
    for (const prop in object) {
        if (object[prop] === '' || object[prop] === ' ') {
            object[prop] = null;
        }
    }
    return object
}
console.log(deleteEmpty({ a: '', b: 'b', c: ' ', d: 'd' }))






//#12
let cities1 = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }];
let cities2 = [{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }];

function addProperty(objects,propertyName,propertyValue) {
    for (let i = 0; i < objects.length; i++) {
        objects[i][propertyName] = propertyValue;
    }
    return objects;
}

console.log(addProperty(cities1, 'continent', 'Asia'));
console.log(addProperty(cities2, 'continent', 'Europe'));