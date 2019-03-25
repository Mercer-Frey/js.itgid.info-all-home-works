// let block1 = document.querySelector('.block-1');
// //let block1Style = block1.style;
// block1.style.width = '200px';
// console.log(block1.style);

// block1.classList.add('red');
// block1.classList.add('green');

// block1.classList.remove('green');

// console.log(block1.classList); // список всех классов
// // проверка наличия класса у элемента
// console.log(block1.classList.contains('red'));

// block1.classList.toggle('red');
// block1.classList.toggle('red');


// Реализуйте модальное окно, которое будет скрываться и показываться с помощью добавления CSS класса hide. Как и раньше открыть и закрыть окно можно с помощью кнопок. Добавить возможность закрывать окно (добавлять .hide) при нажатии клавиши Esc.

let modal = document.querySelector('#modal');
let open = document.querySelector('#open');
let close = document.querySelector('#close');

open.onclick = function(e){
    modal.classList.remove('hide');
}
close.onclick = function(e){
    modal.classList.add('hide');
}
window.onkeydown = function(e){
    if(e.keyCode == 27) { modal.classList.add('hide') };
}
document.onkeydown = function(e){ //пробел
    if(e.keyCode == 32) { modal.classList.remove('hide'); };
}