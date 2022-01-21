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
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = johnWeight / johnHeight ** 2;

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's`);
// }

// Type Conversion

// const inputYear = '1991';

// console.log(Number(inputYear), inputYear);
// console.log(Number('lee')); // NaN
// console.log(typeof NaN); //number
// console.log(String(23), 23);

// Type coercion
// 문자열에 대한 강제 형변환을 유발한다
// console.log('I am ' + 23 + ' years old');

// let n = '1' + 1; // '11'
// n = n - 1; // 강제 형병환
// console.log(n);

// 5 falsy values: 0 , '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Lee'));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log('You should get a job');
// }

// let height;
// if (height) {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// == or ===
// === type까지 비교를 한다 강제 형병환을 유발하지 않고 비교
// == 강제 형병환이 일어나 비교 하게된다 10 == '10' true
// const age = 10;
// if (age === 10) console.log('10years old');

// boolean logic

// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);

//Quiz 3

// const dolphins = (96 + 108 + 89) / 3;
// const koalas = (88 + 91 + 110) / 3;

// if (dolphins > koalas) {
//   console.log('Dolphin Win');
// } else if (koalas > dolphins) {
//   console.log('Koalas Win');
// } else {
//   console.log('both win ');
// }

// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 123) / 3;
// console.log(dolphins, koalas);
// if (dolphins > koalas && dolphins >= 100) {
//   console.log('Dolphin Win');
// } else if (koalas > dolphins && koalas >= 100) {
//   console.log('Koalas Win');
// } else {
//   console.log('both win ');
// }

// Switch

// const day = 'tue';
// switch (day) {
//   case 'mon':
//     console.log('monday');
//     break;
//   case 'tue':
//     console.log('Tuesday');
//     break;
//   default:
//     console.log('Not a valid day');
//     break;
// }

// if (day === 'mon') {
//   console.log('monday');
// } else if (day === 'tue') {
//   console.log('tuesday');
// } else if (day === 'wed') {
//   console.log('wednesday');
// } else {
//   console.log('Not a valid day');
// }

// Quiz 4

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill} the tip ${tip} and the total value ${bill + tip}`
);
