// Homework2
// 1
const number=("Eded daxil edin:")

if (number > 0){
    console.log("Pozitivdir");
} 
else if (number < 0){
    console.log("Negativdir");
}
else {
    console.log("Zerodur");
}


// 2
const number2=("Eded daxil et:")

if (number2 % 2 === 0) {
    console.log("Cüt ədəddir");
}
else {
    console.log("Tek ededdir");
}

// 3
const n1=(5)
const n2=(2)
if (n1 > n2) {
    console.log("5 boyukdur");
} else {
    console.log("2 boyukdur ve ya =dir");
}

// 4
let grade=85
let letter
if (grade >= 90 && grade <=100) {
    letter= 'A'
} else if (grade >= 80 && grade < 90) {
    letter = 'B'
} else if (grade >=70 && grade < 80) {
    letter = 'C'
} else if (grade >=60 && grade < 70) {
    letter = 'D'
} else if (grade >=0 && grade < 60) {
    letter = 'F'
} else {
  letter = 'fail'
}
console.log('grade: ' + grade + 'letter: ' + l);

// 5
const age2=("20")
let ticketprice;
if (age2<="12") {
    ticketprice = 5
} else if (age2 >= "14" || age2 <="50") {
    ticketprice=7
}
else {
    ticketprice=10
}
console.log(`${age2} üçün bilet $${ticketprice}`);

// 6
const price = ("Qiymet")
let discount;


if (price >= 50) {
    discount=price*0.1
} else if (price >= 20) {
    discount = price * 0.2
}else {
    discount=0
}

console.log(`$${discount}`);
console.log($$(price));


