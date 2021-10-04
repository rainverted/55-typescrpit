//validus js lygus ir validus ts scriptas, bet ne atvirksciai
// const a = 5;
// console.log(a);

let a : number = 5;             //:number - uztvirtina duota tipa
console.log(a);

//negalime suteikti kitos reiksmes pirminiam tipui
// a = true;
// console.log(a);

a = 7;
console.log(a);

let username : string = 'Vardenis';
username = '';

//naudodami | galime priskirti kelis tipus
let dob : number | string = 2020;
dob = '1900';
dob = 2000;

let arVedes : boolean = true;
let inputArVedesReiksme : string = 'false';
arVedes = inputArVedesReiksme === 'true';
console.log(inputArVedesReiksme);
console.log(arVedes);

function sumavimas(a : number, b : number) : string {
    return '' + (a + b);
}

const suma1 : number = +sumavimas(7, 4);
console.log(suma1);

const suma2 : number = parseFloat(sumavimas(5, 88));
console.log(suma2);

let luckyNumber : number | string = 7;
luckyNumber = 'seven';

const pazymiai : number[] = [10, 2, 8, 4];

// ---------------------------------------------------------


interface Student {
    name: string;
    age: number;
    marks: number[];
}

let petriukas: Student = {
    name: 'Petriukas',
    age: 9,
    marks: [2, 4, 6],
}

let maryte: Student = {
    name: 'Maryte',
    age: 10,
    marks: [9, 7, 5],
}

let wanda: Student = {
    name: 'Wanda', 
    age: 10, 
    marks: [7, 8]
}

//let antraKlase: Student[] = [petriukas, maryte, wanda];
let antraKlase: Student[] = [petriukas, maryte, {name:'Wanda', age: 9, marks:[10,8]}];