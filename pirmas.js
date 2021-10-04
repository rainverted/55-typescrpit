"use strict";
//validus js lygus ir validus ts scriptas, bet ne atvirksciai
// const a = 5;
// console.log(a);
let a = 5; //:number - uztvirtina duota tipa
console.log(a);
//negalime suteikti kitos reiksmes pirminiam tipui
// a = true;
// console.log(a);
a = 7;
console.log(a);
let username = 'Vardenis';
username = '';
//naudodami | galime priskirti kelis tipus
let dob = 2020;
dob = '1900';
dob = 2000;
let arVedes = true;
let inputArVedesReiksme = 'false';
arVedes = inputArVedesReiksme === 'true';
console.log(inputArVedesReiksme);
console.log(arVedes);
function sumavimas(a, b) {
    return '' + (a + b);
}
const suma1 = +sumavimas(7, 4);
console.log(suma1);
const suma2 = parseFloat(sumavimas(5, 88));
console.log(suma2);
let luckyNumber = 7;
luckyNumber = 'seven';
const pazymiai = [10, 2, 8, 4];
let petriukas = {
    name: 'Petriukas',
    age: 9,
    marks: [2, 4, 6],
};
let maryte = {
    name: 'Maryte',
    age: 10,
    marks: [9, 7, 5],
};
let wanda = {
    name: 'Wanda',
    age: 10,
    marks: [7, 8]
};
//let antraKlase: Student[] = [petriukas, maryte, wanda];
let antraKlase = [petriukas, maryte, { name: 'Wanda', age: 9, marks: [10, 8] }];
