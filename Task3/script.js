//1
const arr1 = [9,1,5,8,9,9,3,22,11,12,32,8]
let sum = 0
console.log(arr1.map((_,index) => sum += index ));
console.log(sum);

//2
arr1.push(10,88);
console.log(arr1);

//3
arr1.shift(); 
arr1.shift();
console.log(arr1);

//4
arr1.unshift(0,9,11);
console.log(arr1);

//5
arr1.shift(); 
arr1.shift(); 
arr1.shift(); 
arr1.shift(); 
console.log(arr1);


//6
let text = 'ulfat'
text = text.replace('u', 'U');
console.log(text);


// task 7 
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"]
const result = arr2.map(item => item.replaceAll('Gulshen', 'Rovshen'))
console.log(arr2);

const result2 = arr2.map(item => {
        if (item === 'Gulshen') {
            return item = 'Rovshen'
        } else {
            return item
        }
    })
    console.log(result2);

let age = 17

if (age >= 18) {
    console.log(1);
} else if (age === 20) {
    console.log(2);
} else {
    console.log(3);
}



// age >= 18 ?
//     console.log(1)
//     : age === 18 ? console.log(2) : console.log(3);

// age >= 18 ? console.log(1)
//     : age === 18 ? console.log(2)

// falsee && console.log('true');
// let age = 17;

// if (age >= 18) {
//     console.log(1);
// } else if (age === 20) {
//     console.log(2);
// } else {
//     console.log(3);
// }



// task 8
const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
let numberOnly = arr3.filter(item => typeof item === 'number');
console.log(numberOnly);

//2
let trueV = arr3.filter(item => item === true);
console.log(trueV);


//3
const falsey = arr3.filter(item => !item);
console.log(falsey);

//4
const strings = arr3.filter(item => typeof item === 'string');
console.log(strings);


// task 9  
const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
console.log(numbers.filter((number) => number %2 !==0));
console.log(numbers.filter((number) => number %2 !==1));

// task 10 ////////////// TASK 9 //////////////
const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
console.log(arr4);

const a5 = arr4.map(item => { if (typeof item === 'number') {
        return item + 10;
    } else if (typeof item === 'string') {
        return item + " is string";
    } else if (!item) { 
        return item + "falsy";
    } else {
        return item; 
    }
});

console.log(a5);

//2
let sum4 = 0
console.log(arr4.map((_,index) => sum += index ));

//3
const a4 = arr4.filter(x => x === true)
console.log(a4);

//4
const st = arr4.filter(x => typeof x === 'string')
console.log(st);

//5
const fals = arr4.filter(x => x === false)
console.log(fals);


//task10
const obj = {
    name:'aysu',
    mail: 'aysu@gmail.com',
    info: {
        gender: 'Female',
        loc: {
            city: "Baku",
            street: 'Nizami',
            education: {
                "uni name": "aztu",
            }
        }
    }
}

//2
obj.name = "John";
console.log(obj);

//3
console.log(obj.info.gender);

//4
console.log(obj.info.loc.city);


//task11
let fullName ='Aysu Bayramova Alekber'
let fn = fullName.split('');
console.log(fn);

//2
let f1 = fullName.split(' ');
let bayramovaIndex = f1.findIndex(lastName => lastName === 'Bayramova');
if (bayramovaIndex !== -1) {
    let bayramova = f1.splice(bayramovaIndex, 1);
    f1.unshift(bayramova);
}
let final = f1.join(' ');
console.log(final);

//3
let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        count++;
    }
}

console.log(count);


//4
let sum5 = 0;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        sum5 += arr[i];
    }
}
console.log(sum5);

//5
arr.sort((a, b) => a - b);
console.log(arr)

//6
let maxNumber = Math.max(...arr);
let countOfMax = arr.filter(num => num === maxNumber)
console.log(maxNumber);
console.log( countOfMax);

//7
let four = arr.includes(4);
console.log(four);

//8
let first3 = arr.slice(0, 3);
let remain = first3.map(num => num % first3[0]);
let remainIndex = arr.indexOf(remain[2]);
console.log( remain[2]);
console.log( remainIndex);


//9
let max = arr[0]; 
let maxIndex = 0;      
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
    }
}

console.log(maxIndex);

//10
let index = arr.indexOf(4);
console.log(index);

//11
let sum7 = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 7) {
        sum7 += i;
    }
}
console.log(sum7);


//task 12
let arrr2 = [
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
let filterT = [];
for (let obj of arrr2) {
    if (obj.name.startsWith('t')) {
        filterT.push(obj);
    }
}
console.log(filterT);


//17

let countT = 0;
for (let obj of arrr2) {
    if (obj.name.startsWith('t') && obj.name.endsWith('t')) {
        countT++;
    }
}
console.log(countT);

//18
let sumT = 0;
for (let obj of arrr2) {
    if (obj.name.startsWith('t') && obj.name.endsWith('t')) {
        sumT += obj.key;
    }
}
console.log(sumT);

//19
for (let obj of arrr2) {
    if (obj.name.endsWith('e')) {
        obj.name = 'SuperDev';
    }
}

console.log(arrr2);

//20
let elephantKey = 0;
for (let obj of arrr2) {
    if (obj.name === 'elephant') {
        elephantKey = obj.key;
        break; 
    }
}
console.log(elephantKey);

//21
let elephant = [];
for (let i = 0; i < arrr2.length; i++) {
    if (arrr2[i].name === 'elephant') {
        elephant.push(i);
    }
}
let eleph = elephant.map(index => index ** 2);
console.log(eleph);

//22
let newArray = arrr2.filter(obj => obj.name.length === 4);
console.log(newArray);

//23
let keys = arrr2.map(obj => obj.key);
let maxKeys = Math.max(...keys);
let maxKey = arrr2.find(obj => obj.key === maxKeys);
console.log(maxKey.name);


