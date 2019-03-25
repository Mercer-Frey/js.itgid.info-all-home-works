// document.querySelector('.onclick').onclick = function () {
//     console.log('click');
// }

// document.querySelector('.ondblclick').ondblclick = function () {
//     console.log('double click');
// }

// document.querySelector('.onmousemove').onmousemove = function () {
//     console.log('gooooo');
// }

// document.querySelector('.onmouseenter').onmouseenter = function () {
//     // мышь на элемент - 1 раз
//     console.log('enter');
// }

// document.querySelector('.onmouseleave').onmouseleave = function () {
//     // мышь покидает элемент - 1 раз
//     console.log('leave');
// }

// document.querySelector('.onmousewheel').onmousewheel = function () {
//     // мышь колесико
//     console.log('wheel');
//     return false;
// }

// document.querySelector('.onmousewheel').oncontextmenu = function () {
//     // контекстное меню
//     console.log('contextmenu');
//     return false;
// }

// function test() {
//     console.log(2 / 3);
// }

// function test2() {
//     let a = 2
//     return a / 3;
// }

// test();
// console.log(5 * test());
// console.log(5 * test2());




// Создайте блок напишите текст. Добавьте на созданный блок событие dblclick. Сделайте так, чтобы при двойном клике не выделялся текс внутри блока.

// let select = document.querySelector('.select');

//     select.onmousemove = select.onselectstart = function(){
//         console.log('text');
//             return false;  // работает с чем угодно кроме дабл клика))
//     }

//     select.ondblclick = clearSelection;
//     function clearSelection() {
//         if (window.getSelection) {
//             console.log('text');
//         window.getSelection().removeAllRanges();
//         } else { // старый IE
//             document.selection.empty();
//         }
//     }

// Отключите клик правой кнопкой мыши на документе.

document.oncontextmenu = function(event){
    event.preventDefault();
}

// Создайте блок. В качестве фона добавьте изображение закрытой папки. Добавьте событие, чтобы при наведении мыши изображение закрытой папки сменялось изображением открытой папки. При уведении мыши с блока - все возвращалось в исходный вид.

let out = document.getElementById('out');

    out.onmouseenter = function (){
        out.style.backgroundImage = 'url(open.jpg)';
        out.innerHTML = '0ткрыт0';

    };
    out.onmouseout = function (){
        out.style.backgroundImage = 'url(close.jpg)';
        out.innerHTML = 'з0крыт0';
	};


// Создайте несколько блоков с разными классами. Добавьте событие, чтобы при наведении мыши блок окрашивался в случайный цвет. Для генерации цвета используйте функцию, которая возращает строку вида rgb(23, 45, 66) со случайными числами.

let block = document.querySelectorAll('.rand');

block.forEach(element => {
    element.onmouseenter = function(){
        let r = randNum();
        let g = randNum();
        let b = randNum();

        this.style.backgroundColor = 'rgb('+ r + ', ' + g + ', ' + b + ')';
    }
});

function randNum(){
    let rand = 0 + Math.random() * (255 + 1 - 0);
    return rand = Math.floor(rand);
}

