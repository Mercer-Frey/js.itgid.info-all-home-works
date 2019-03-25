// // парный тег
// document.querySelector('p').innerHTML += ' Пример span <b>Hi</b>';
// document.querySelector('p').innerText += ' Пример span <b>Hi</b>';
// // -----------------------

// document.querySelector('h1').outerHTML = '<h2>jjjj</h2>';
// document.querySelector('h2').outerText = '<h2>jjjj</h2>';
// // ----------------------

// document.querySelector('div').insertAdjacentHTML('beforebegin', 2222);
// document.querySelector('div').insertAdjacentHTML('afterbegin', 333);
// document.querySelector('div').insertAdjacentHTML('afterend', 5555);
// document.querySelector('div').insertAdjacentHTML('beforeend', 4444);

// //-----------------------

// document.querySelector('.one span').innerHTML = 9999;
// // ----------------------
// console.log(document.querySelector('img').alt);
// document.querySelector('img').alt = 'yellow cat';


// console.log(document.querySelector('img').src);
// document.querySelector('img').src = 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-48.png';

// document.querySelector('title').innerText = 'Lesson 4';

// console.log(document.querySelector('link').href);
// document.querySelector('link').href = 'style2.css';

// // -------------------------
// console.log(document.querySelector('input').value);
// document.querySelector('input').value = '13.12.2018';
// document.querySelector('input').type = 'range';


// // ******************************************************************


// 1. Создайте два файла css - один подключите сразу. Во втором пропишите стили так, чтобы скрывались все изображения, фоны и блоки. Оставался один текст, весь текст черным, выравнивание по левому краю, шрифт - serif. Добавьте кнопку при нажатии на которую вы должны получить элемент link href - где прописан путь к файлу css и заменить его на второй файл. Т.е. было:
//     <link rel="stylesheet" href="style1.css">
//     стало
//     <link rel="stylesheet" href="style2.css">
// Кнопка также должна скрываться.

let print = document.querySelector('#print');
let link = document.querySelector('link');

function printF(){
  link.href = 'style2.css';
}
print.onclick = printF;

// 2. Создайте параграф с текстом Hello. Добавьте кнопку. При нажатии кнопки к содержимому параграфа добавьте word. При каждом нажатии - добавляйте слово world. т.е:
// нажатие 1
// Hello word
// нажатие 2
// Hello word word
// и так далее. Сколько нажатий - столько word и добавляете.

let pWorld = document.querySelector('#world');
let bWord = document.querySelector('#word');

function bWordF (){
  pWorld.insertAdjacentHTML('beforeend', ' world');
}
bWord.onclick = bWordF;

// 3. Создайте параграф с текстом Hello. При нажатии кнопки между тегом p и словом Hello добавьте любой текст. Используйте insertAdjacentHTML.
let hello = document.querySelector('#hello');
let inner = document.querySelector('#inner');

function innerF (){
  hello.insertAdjacentHTML('afterbegin', 'world ');
}
inner.onclick = innerF;


// 4. Создайте параграф с текстом Hello. При нажатии кнопки перед тегом p добавьте любой текст. Используйте insertAdjacentHTML.
let helloBefore = document.querySelector('#helloBefore');
let innerBefore = document.querySelector('#innerBefore');

function innerBeforeF (){
  helloBefore.insertAdjacentHTML('beforebegin', '<p>world </p>');
}
innerBefore.onclick = innerBeforeF;

// 5. Создайте параграф с текстом Hello. При нажатии кнопки после слова Hello и перед закрывающимся тегом p добавьте любой текст. Используйте insertAdjacentHTML.
let helloAfter = document.querySelector('#helloAfter');
let innerAfter = document.querySelector('#innerAfter');

function innerAfterF (){
  helloAfter.insertAdjacentHTML('afterend', '<p>world </p>');
}
innerAfter.onclick = innerAfterF; 

// 6. Создайте параграф с текстом Hello. При нажатии кнопки перезатрите содержимое параграфа строкой <b>Hi</b>. Вставку произведите сналача с помощью innerHTML, затем с помощью innerText. Изучите отличия вставки.
let helloHtml = document.querySelector('#helloHtml');
let innerHtml = document.querySelector('#innerHtml');

function innerHtmlF (){
  // helloHtml.innerHTML = '<b>Hi</b>'; //различает теги
  // helloHtml.innerText = '<b>Hi</b>'; //затирает строгой строкой
}
innerHtml.onclick = innerHtmlF; 

// 7. Создайте параграф с текстом Hello. При нажатии кнопки перезатрите параграф строкой <b>Hi</b>. Вставку произведите сналача с помощью outerHTML, затем с помощью outerText. Изучите отличия вставки.
let helloOuter = document.querySelector('#helloOuter');
let innerOuter = document.querySelector('#innerOuter');

function innerOuterF (){
  // helloOuter.outerHTML = '<b>Hi</b>'; //заменяет тег / теги
  // helloOuter.outerText = '<b>Hi</b>'; //заменяет тег /затирает строгой строкой
}
innerOuter.onclick = innerOuterF; 
