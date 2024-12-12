//**********************************************
// Задача 2.1

alert( 'Я JavaScript!');

//**********************************************
//переменные

let admin;
let name;
name = "Джон";
admin = name;
alert(admin);

console.log(admin)

//**********************************************

let myEarth = "Planeta";
let newUser = "Valeriia";

console.log(myEarth);
console.log(newUser);

//**********************************************
// Взаимодействие alert; prompt; confirm

let userName = prompt("What's ur name?") 
alert(`${userName} - твоё имя!`);

console.log(userName)

//**********************************************

let a = +prompt("First number");
let b = +prompt("Second number");

alert(a + b);

//**********************************************
// Задача 1

let number = +prompt("Ur number");
if (number === 0) {
    alert("Число равно нулю!");
}
if (number % 2===0 ) {
    alert("Число чётное!");
}
else{
    alert("Число нечётное!");
}

//**********************************************
//Задача 2

let change = prompt("Введите число");
if (change /4){
    alert("Это значение можно преобразовать в число");
}
else{
    alert("Это значение преобразовать в число не получится. Получится NaN");
}

//**********************************************