// //конструктор
// let Track  = function(params){ 
//   console.log(params);//в params придут {name: "track01", url: "track01.mp3"}
//   //this является контекстом екземпляра и к его полям обращаемся через точку
//   this.name = params.name,
//   this.url = params.url
//   // теперь екземпляры создаутся
//   // this.playTrack = function(){  //функция является методом класса 'playTrack'
//   //   console.log('We started playing', this.name);
//   // }
// };
// // console.log(Track.prototype); //{constructor: ƒ}

// Track.prototype.playTrack = function(){  //функция является методом класса 'playTrack'
//   console.log('We started playing', this.name);// способ через prototype дает возможность изменять функцию
// };
// // console.log(Track.prototype); // {playTrack: ƒ, constructor: ƒ}

// // создаем екземпляр класса и передаем  в конструктор параметры (обьектом)
// let track01 = new Track({ 
//   name: 'track01',
//   url: 'track01.mp3'
// });// console.log({track01, track02}); - покажет пустые обьекты

// // создаем екземпляр класса и передаем  в конструктор параметры (обьектом)
// let track02 = new Track({ 
//   name: 'track02',
//   url: 'track02.mp3'
// }); 
// console.log({track01, track02});
// track01.playTrack();
// track02.playTrack();

// let YoutubeTrack = function (params){
//   //apply вызывает конструктор Track внутри YoutubeTrack передавая контекстом this (YoutubeTrack) и передавая arguments то есть все аргументы которые будут переданы в YoutubeTrack
//   Track.apply(this, arguments); 
// //без apply создадутся пустые обьекты
//   this.image = params.image;
// };

// //что бы все функции что есть в Track были доступны в YoutubeTrack реализовуем наследование
// // присваеваем в Object.create обьект который сделали из Track.prototype
// YoutubeTrack.prototype = Object.create(Track.prototype);

// //выдаст конструктор Track
// console.log(YoutubeTrack.prototype.constructor); 
// //вернем ссылку на старый конструктор YoutubeTrack
// YoutubeTrack.prototype.constructor = YoutubeTrack;
// //теперь выдаст родной конструктор YoutubeTrack
// console.log(YoutubeTrack.prototype.constructor); 
// // теперь у всех екземпляров YoutubeTrack есть родительский метод playTrack который мы можем переопределить у етого дочернего класса
// YoutubeTrack.prototype.playTrack = function(){
//   console.log('Hello world my name', this.name);
// }

// // создаем екземпляр класса и передаем  в конструктор параметры (обьектом)
// let youtubeTrack01 = new YoutubeTrack({ 
//   name: 'youtubeTrack01',
//   url: 'youtubeTrack01.mp3',
//   image: 'youtubeTrack01.jpg'

// });// console.log({track01, track02}); - покажет пустые обьекты

// // создаем екземпляр класса и передаем  в конструктор параметры (обьектом)
// let youtubeTrack02 = new YoutubeTrack({ 
//   name: 'youtubeTrack02',
//   url: 'youtubeTrack02.mp3',
//   image: 'youtubeTrack02.jpg'
// }); 
// console.log({youtubeTrack01, youtubeTrack02});
// youtubeTrack01.playTrack();
// youtubeTrack02.playTrack();




// let Worker = function (name, surname, rate, days) {
//   this.name = name, 
//   this.surname = surname,
//   this.rate = rate,
//   this.days = days

//   this.getSalary = function () {
//     return this.rate * this.days;
//   }
// }

// Worker.prototype.getSalary = function () {
//   return this.rate * this.days;
// }



class Worker  {
  constructor(name, surname, rate, days){
  this._name = name, 
  this._surname = surname, //нижнее подчеркивание условный знак о том что свойство нельзя перезаписывать. для уверенности используем геттеры
  this.rate = rate,
  this.days = days
  }

  getSalary () { 
    return this.rate * this.days;
  }

  getName () { //геттер запрещает чтение на прямую с наружи
    return this._name;
  }

  getSurname () {
    return this._surname;
  }
// сеттер дает возможности для записи свойства. так же можно указывать условия записи
  setAge (age) {  
    if(this._checkAge(age)){
      this._age = age;
    }
    else{
      alert('Люди столько не живут');
    }
  }

  _checkAge(age){
    if(age > 0 && age < 100 ){
      return true;
    }
    else{
      return false;
    }
  }

  getAge () {
    return this._age;
  }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker.getName());
console.log(worker.getSurname());
// console.log(worker.rate);
// console.log(worker.days); 
console.log(worker.getSalary());
console.log(worker);

worker.setAge(25);
console.log(worker.getAge());



// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
// Наш класс должен работать так:

// str.reverse('abcde'); //выведет 'edcba'
// str.ucFirst('abcde'); //выведет 'Abcde'
// str.ucWords('abcde abcde abcde'); //выведет 'Abcde Abcde Abcde'


let MyString = function (){
  this.reverse = function (str){
    let newStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str.charAt(i);
    }
    return newStr;
  }

  this.ucFirst = function (str) {
    if(!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  this.ucWords = function (str) {
    let string = str;
    let splits = string.split(' ');
    let stringItog = '';

    for (var i = 0; i < splits.length; i++) {
      let name = splits[i];
      let first = name.substring(0, 1).toUpperCase();
      let left = name.substring(1, name.length);
      stringItog += first + left + ' ';
    }
    return stringItog;
  }
}

let str = new MyString();

console.log(str);
console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));



// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:


class Validator {
  constructor(){}

  isEmail(email){
    let emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailCheck.test(String(email).toLowerCase());
  };
  isDomain(domain){
    if (!domain) return false;
    let domainCheck = /^(?!:\/\/)([a-zA-Z0-9-]+\.){0,5}[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,64}?$/gi; 
    return domainCheck.test(String(domain).toLowerCase());
  };
  isDate(date){
    let dataCheck = /^\d{2}([./-])\d{2}\1\d{4}$/;
    return dataCheck.test(String(date).toLowerCase());
  };
  isPhone(phone){
    let phoneCheck =  /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    return phoneCheck.test(String(phone).toLowerCase());
  };

}

let validator = new Validator();

console.log(validator.isEmail('sadsad@sad.ru'));
console.log(validator.isDomain('sadsad.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('(066)789-8908')); //тут можете формат своей страны



// Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

// Вот так должен работать наш класс:


// student.name; //выведет 'Иван'
// student.surname; //выведет 'Иванов'
// student.getFullName(); //выведет 'Иван Иванов'
// student.year; //выведет 2016
// student.getCourse(); //выведет 3 - третий курс, так как текущий год 2019


// 'use strict';

class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
  }
}
class Student extends User{
  constructor(name, surname, year){
    super(name, surname);
    this.year = year
  }
  getCourse(){
    return 2019 - this.year;
  }
}
var student = new Student('Иван', 'Иванов', 2016);


console.log(student); 
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 2016
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 2019



// Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:

// var elem = new Elem('селектор');

// elem.html('!'); //запишет в текст элемента '!'
// elem.append('!'); //запишет в начало элемента '!'
// elem.prepend('!'); //запишет в конец элемента '!'
// elem.attr('class', 'www'); //запишет в атрибут class значение www

//Должны работать цепочки методов:
// elem.html('hello').append('!').prepend('!');
// elem.attr('class', 'www').attr('title', 'hello');


class Elem{
  constructor(tag){
    this.tag = tag;
  }
  html(str){
    document.getElementsByTagName(this.tag)[0].innerHTML = str;
    return this;
  }
  append(str){
    document.getElementsByTagName(this.tag)[0].append(str);
    return this;
  }
  prepend(str){
    document.getElementsByTagName(this.tag)[0].prepend(str);
    return this;
  }
  attr(atr, val){
    document.getElementsByTagName(this.tag)[0].setAttribute(atr, val);
    return this;
  }
}
let elem = new Elem('body');


// elem.html('1'); //запишет в текст элемента '!'
// elem.append('2'); //запишет в начало элемента '!'
// elem.prepend('3'); //запишет в конец элемента '!'
// elem.attr('class', 'www'); //запишет в атрибут class значение www

//Должны работать цепочки методов:
// elem.html('hello').append('!').prepend('!');
// elem.attr('class', 'www').attr('title', 'hello');




// Работа с call

// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.


// let elem1 = document.getElementById('elem1');

// function func() {
// 	console.log(this.value);
// }
// func.call(elem1);





// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'привет, Иванов Иван'. Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями. */}

// let elem2 = document.getElementById('elem2');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.call(elem2, 'Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'



// Работа с apply
//  Переделайте решение предыдущей задачи так, чтобы место метода call() был метод apply().

// let elem1 = document.getElementById('elem1');
// function func() {
// 	console.log(this.value);
// }
// func.apply(elem1);



// let elem2 = document.getElementById('elem2');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.apply(elem2, ['Иванов', 'Иван']); //тут должно вывести 'привет, Иванов Иван'


// Работа с bind

// Напишите конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на инпут из переменной elem3.
let elem3 = document.getElementById('elem3');

function func(surname, name) {
	console.log(this.value + ', ' + surname + ' ' + name);
} 

func = func.bind(elem3)

func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'


