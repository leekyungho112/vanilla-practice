// variable name conventions
/* 
let myName = 'kyungho';

let firstName = 'lee';

console.log(myName);
console.log(firstName);
*/
// Data Type
// number
// let age = 20;
// string
// let username = 'lee';
// Boolean
// let isFun = true;
// console.log(typeof age);
// console.log(typeof username);
// console.log(typeof isFun);
// undefined
// 변수를 선언했지만 값을 할당하지 않아 undefined가 되었다.
// let year;
// console.log(year);
// console.log(typeof year);
// null

// symbol

// BigInt (es2020)

// es6 let, const

// mutable
// let age = 30;
// age = 31; //재할당
// console.log(age);
// immutable
// const를 사용시에는 기본적으로 초기값을 필요로 한다.
// const job;
// const birthDay = 1997;
// var job = 'programmer';
// job = 'teacher';
// console.log(job);
// const ageLee = 2050 - 1987;
// console.log(ageLee);

//BMI = mass / height ** 2 = mass / (height * height)

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;
// console.log(markBMI);
// console.log(johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// 템플릿리터럴

// const firstName = 'Lee';
// const job = 'programmer';
// const birthDay = 1987;
// const year = 2037;
// const lee =
//   "I'm " + firstName + ', a ' + (year - birthDay) + ' years old ' + job + '!';

// const leeNew = `I'm ${firstName}, a ${year - birthDay} years old ${job} !`;

// console.log(lee);
// console.log(leeNew);

// if else

// const age = 18;

// if (age >= 18) {
//   console.log('ok you are driving license');
// } else {
//   console.log('No you are kid!!');
// }

// const birthDay = 1988;

// let century;
// if (birthDay <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// Quiz
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's`);
}

// Type Conversion and Coercion

const inputYear = '1991';

console.log(Number(inputYear), inputYear);
console.log(Number('lee')); // NaN
console.log(typeof NaN); //number
console.log(String(23), 23);
