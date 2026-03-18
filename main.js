//Практичнна №1
let intNum = 10;
let floatNum = 3.14;
let str = "Hello";
let bool = true;

console.log(typeof intNum);
console.log(typeof floatNum);
console.log(typeof str);
console.log(typeof bool);

intNum = "123";
floatNum = "45.67";
str = 100;
bool = 0;

console.log(typeof intNum);
console.log(typeof floatNum);
console.log(typeof str);
console.log(typeof bool);

let concat = intNum + str; 
console.log(concat);

console.log(Number(true)); 
console.log(Number(false));

let user = {
    name: "Іван",
    age: 20,
    isStudent: true,
    height: 1.75
};

console.log(JSON.stringify(user));



//Завдання №2
let a = Number(prompt("Введіть перше число:"));
let b = Number(prompt("Введіть друге число:"));
let c = Number(prompt("Введіть третє число:"));

let avg = (a + b + c) / 3;
console.log("Середнє:", avg);

console.log("Модуль:", Math.abs(a));
console.log("Округлення вгору:", Math.ceil(b));
console.log("Округлення вниз:", Math.floor(c));
console.log("Степінь:", Math.pow(a, 2));

console.log("Ділиться на 5:", a % 5 === 0);
console.log("Ділиться на 7:", b % 7 === 0);

if (a + b > c && a + c > b && b + c > a) {
    console.log("Трикутник існує");
} else {
    console.log("Трикутник не існує");
}


//Практичнна №3
   let x = Number(prompt("Введіть число x:"));
let y = Number(prompt("Введіть число y:"));
let z = Number(prompt("Введіть число z:"));

let max = Math.max(x, y, z);
let min = Math.min(x, y, z);

console.log("Найбільше:", max);
console.log("Найменше:", min);

if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
    console.log("Є хоча б одне парне число");
}

console.log(x > y && y < z);

let num = Number(prompt("Введіть число для перевірки:"));
let isPrime = true;

if (num <= 1) isPrime = false;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log("Просте число:", isPrime);



//Практична №4
let name = prompt("Ваше ім'я:");
let birthYear = Number(prompt("Рік народження:"));
let city = prompt("Місто:");

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log(`Привіт, ${name}. Тобі ${age} років.`);

if (age < 12) {
    console.log("Дитина");
} else if (age < 18) {
    console.log("Підліток");
} else if (age < 60) {
    console.log("Дорослий");
} else {
    console.log("Літня людина");
}

let capital = "Київ";

if (city.toLowerCase() === capital.toLowerCase()) {
    console.log("Ви живете у столиці");
} else {
    console.log("Ви не живете у столиці");
