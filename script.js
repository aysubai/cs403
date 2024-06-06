//1 for loop
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];
let sum = 0;

for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log(sum);

// function
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray(arr1));


//2
const add = [10, 88];

for (let i = 0; i < add.length; i++) {
    arr1.push(add[i]);
}

console.log(arr1);

//2
function addNumber(array, numbers) {
    for (let i = 0; i < numbers.length; i++) {
        array.push(numbers[i]);
    }
    return array;
}
const newArr4 = addNumber(arr1, [10, 88]);
console.log(arr1);


//3
for (let i = 0; i < 2; i++) {
    arr1.shift();
}
console.log(arr1);

//3
function remv (array, n) {
    for (let i = 0; i < n; i++) {
        array.shift();
    }
    return array;
}
console.log(remv(arr1, 2));

//4 
const numberAdd = [0, 9, 11];
for (let i = 0; i < numberAdd.length; i++) {
    arr1.unshift(numberAdd[i]);
}
console.log(arr1);

//4
function x (array, elements) {
    for (let i = elements.length - 1; i >= 0; i--) {
        array.unshift(elements[i]);
    }
    return array;
}
console.log(x(arr1, [0, 9, 11]));

//5
for (let i = 0; i < 4; i++) {
    arr1.shift();
}
console.log(arr1);

//5
function remFirst(array, n) {
    for (let i = 0; i < n; i++) {
        array.shift();
    }
    return array;
}
console.log(remFirst(arr1, 4));


// TASK 6
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 'Gulshen') {
        arr2[i] = 'Rovshen';
    }
}
console.log(arr2); 

//6
function replace (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'Gulshen') {
            array[i] = 'Rovshen';
        }
    }
    return array;
}
const result = replace(arr2);
console.log(result); 


//6.1
let age = 17;
const ages = [age];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        console.log(1);
    } else if (ages[i] === 20) {
        console.log(2);
    } else {
        console.log(3);
    }
}

//6.2
function ag(age) {
    if (age >= 18) {
        return 1;
    } else if (age === 20) {
        return 2;
    } else {
        return 3;
    }
}
console.log(ag(age));

//task 7
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false];
const numbers = [];

for (let i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === 'number' && !isNaN(arr3[i])) {
        numbers.push(arr3[i]);
    }
}
console.log(numbers); 

//7.2
let trueValues = [];

for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === true) {
        trueValues.push(arr3[i]);
    }
}
console.log(trueValues);

//7.2
function onlyTrue(arr3) {
    const trueValues = [];

    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] === true) {
            trueValues.push(arr3[i]);
        }
    }

    return trueValues;
}
console.log(onlyTrue(arr3));


//7.3
let falseValues = [];
for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] === false) {
        trueValues.push(arr3[i]);
    }
}
console.log(falseValues);

//7.3
function onlyFalse(arr3) {
    let falseValues = [];

    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] === true) {
            falseValues.push(arr3[i]);
        }
    }

    return falseValues;
}
console.log(onlyFalse(arr3));


//7.4
let strings = [];
for (let i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === 'string') {
        strings.push(arr3[i]);
    }
}
console.log(strings);

//task 8
const numbers1 = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25];
console.log("even numbers:");
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 === 0) {
        console.log(numbers1[i]);
    }
}

//8.2
console.log("odd numbers:");
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 !== 0) {
        console.log(numbers1[i]);
    }
}

//task 9
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];
console.log("array 4:");
for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

//9.1
let result1 = [];

for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'number') {
        result1.push(arr4[i] + 10);
    } else if (typeof arr4[i] === 'string') {
        result1.push(arr4[i] + " is string");
    } else if (!arr4[i]) {
        result1.push(arr4[i] + " is falsy");
    } else {
        result1.push(arr4[i]);
    }
}
console.log(result1);

//9.1
function y(array) {
    return array.map(item => {
        if (typeof item === 'number') {
            return item + 10;
        } else if (typeof item === 'string') {
            return item + " is string";
        } else if (!item) {
            return item + " is falsy";
        } else {
            return item;
        }
    });
}
console.log(y(arr4));

//9.2
let sum1 = 0;
for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'number' && !isNaN(arr4[i])) {
        sum1 += arr4[i];
    }
}
console.log(sum1);

//9.2
function sumNumbers(array) {
    return array.reduce((acc, cur) => {
        if (typeof current === 'number' && !isNaN(cur)) {
            return acc + cur;
        } else {
            return acc;
        }
    }, 0);
}
console.log(sumNumbers(arr4));

//9.3
let trueCount = 0;
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === true) {
        trueCount++;
    }
}
console.log(trueCount);

//9.4
let stringCount = 0;

for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'string') {
        stringCount++;
    }
}
console.log(stringCount);

//9.5
let falseCount = 0;
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === false) {
        falseCount++;
    }
}
console.log(falseCount);

//task 10
const obj = {
    name:'aysu',
    mail: 'aysu@gmail.com',
    info: {
        gender: 'Female',
        loc: {
            city: "Baku",
            street: 'Nizami 22',
            education: {
                "uni name": "aztu",
            }
        }
    }
}

//10.2
for (let key in obj) {
    if (key === 'name') {
        obj[key] = 'John';
    } else if (typeof obj[key] === 'object') {
        for (let x in obj[key]) {
            if (x === 'name') {
                obj[key][x] = 'John';
            }
        }
    }
}

console.log(obj);

//10.2
function changeName(obj) {
    if (obj.hasOwnProperty('name')) {
        obj.name = 'John';
    }

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            changeName(obj[key]);
        }
    }
}
changeName(obj);
console.log(obj);

//10.3
for (let key in obj.info) {
    if (key === 'gender') {
        console.log(obj.info[key]);
        break; 
    }
}

//10.4
for (let key in obj.info.loc) {
    if (key === 'city') {
        console.log(obj.info.loc[key]);
        break; 
    }
}


//10.4
function printCity(obj) {
    const city = obj.info.loc.city;
    console.log(city);
}
printCity(obj);

//task 11
let fullName = 'aysu bayramova alekber'
let letters = [];
for (let i = 0; i < fullName.length; i++) {
    letters.push(fullName[i]);
}
console.log(letters);

//11
function splitLetters(str) {
    let letters = [];
    for (let i = 0; i < str.length; i++) {
        letters.push(str[i]);
    }

    return letters;
}
console.log(splitLetters(fullName));


//11.2
let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        count++;
    }
}
console.log('tekrarlanan 5:', count);

//11.2
function rep5(item, index) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === index) {
            count++;
        }
    }
    return count;
}
console.log('tekrarlanan 5:', rep5(arr, 5));

//11.5
let sum2 = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        sum2 += arr[i];
    }
}
console.log("array cemi", sum2);

//11.5
function sumNumbers(arr) {
    return arr.reduce((acc, curr) => typeof curr === 'number' ? acc + curr : acc, 0);
}
console.log("array cemi", sumNumbers(arr));

//11.7
function find(arr) {
    let maxNumber = Math.max(...arr);
    let countOfMax = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxNumber) {
            countOfMax++;
        }
    }
    return { maxNumber, countOfMax };
}
const { maxNumber, countOfMax } = find(arr);
console.log("max:", maxNumber);
console.log("tekrarlanib:", countOfMax);

//11.8
let nameLength = 'aysu'.length;
let isPresent = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nameLength) {
        isPresent = true;
        break;
    }
}
if (isPresent) {
    console.log("movcuddur");
} else {
    console.log("movcud deyil");
}

//12
let array1 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

//16
let startT = [];
for (let i = 0; i < array1.length; i++) {
    if (array1[i].name.charAt(0).toLowerCase() === 't') {
        startT.push(array1[i].name);
    }
}

console.log(startT);

//17
let tT = [];
for (let i = 0; i < array1.length; i++) {
    let name = array1[i].name;
    if (name.charAt(0) === 't' && name.charAt(name.length - 1) === 't') {
        tT.push(name);
    }
}
console.log(tT);

//18
// let sumKey = 0;

// for (let i = 0; i < arr2.length; i++) {
//     let name = arr2[i].name;
//     if (name.charAt(0) === 't' && name.charAt(name.length - 1) === 't') {
//         sumKey += arr2[i].key;
//     }
// }
// console.log(sumKey);

//19
for (let i = 0; i < array1.length; i++) {
    let name = array1[i].name;
    if (name.endsWith('e')) {
        array1[i].name = 'SuperDev';
    }
}
console.log(array1);

//20
// let longest = 0;
// let maxLength = 0;
// for (let i = 0; i < arr2.length; i++) {
//     let nameLength = arr2[i].name.length;
//     if (nameLength > maxLength) {
//         maxLength = nameLength;
//         longest = arr2[i].key;
//     }
// }
// console.log(longest);