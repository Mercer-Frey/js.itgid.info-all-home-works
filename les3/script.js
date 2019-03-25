function hello() {
  console.log('Hello');
  hello2();
}

function hello2() {
  console.log('hello-2-2-2-22');
}


let btn = document.querySelector('#btn'); // кнопка
console.log(btn.id);
btn.onclick = hello;
// hello();
//btn.hidden = true;


let showModal = document.querySelector('#modal-show'); // кнопку show modal
let modal = document.querySelector('.modal');

function show() {
  //modal.hidden = true;
  modal.style.display = 'block';
  modal.style.backgroundColor = 'pink';

}

showModal.onclick = show;
//border-radius: 20px;
//border  - 5px;

// *******************************************************

let hideModal = document.querySelector('#modal-hide');

function hide(){
  modal.style.display = 'none';
  modal.style.borderRadius = '20px';
  modal.style.border = '5px solid red'; 
}
hideModal.onclick = hide;

// 2. Напишите функцию, которая складывает два числа. Числа прописаны внутри функции. Функция выполняется при нажатии на кнопку.
let sum = document.querySelector('#sum');
function sumF(){
  alert(10+5/2*234);
}
sum.onclick = sumF;

// 3. Создайте кнопку, добавьте функцию при нажатии на кнопку. Функция должна выводить alert с приветствием.
let hi = document.querySelector('#hi');
function hiF(){
  alert('привет');
}
hi.onclick = hiF;

// 4. Создайте кнопку которая при нажатии запускает две произвольные функции.
let twoFun = document.querySelector('#twoFun');
function twoFunF(){
  show();
  hiF();
}
twoFun.onclick = twoFunF;

// 5. Создайте кнопку, нажатие на которую скрывает сама себя.
let hideMe = document.querySelector('#hideMe');
function hideMeF(){
  hideMe.style.display = 'none';
}
hideMe.onclick = hideMeF;

// 6. Создайте кнопку, которая при нажатии выводит вместо текста на себе - предупреждение "не нажимать".
let pushMe = document.querySelector('#pushMe');
function pushMeF(){
  pushMe.innerHTML = 'don`t touch me!!!!!!!!!!!!!!!!!!!!!!!!!!';
}
pushMe.onclick = pushMeF;
