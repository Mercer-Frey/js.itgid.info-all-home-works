document.querySelector('.push').onclick = function () {
  // данные из input type = text
  console.log(document.querySelector('.text-input').value);


  // данные из input type = password
  console.log(document.querySelector('.pass-input').value);


  // данные из input type = range
  console.log(document.querySelector('.range-input').value);

  // данные из input type = date
  console.log(document.querySelector('.calendar-input').value);

  // данные из input type = color
  console.log(document.querySelector('.color-input').value);

  // данные из input type = checkbox
  console.log(document.querySelector('#checkbox-input').checked);
  if (document.querySelector('#checkbox-input').checked) {
      console.log('Даааааа!');
  }
  else {
      console.log('Heeeeeт');
  }

  console.log('----------------Radio------------');

  // данные из input type = radio
  // console.log(document.querySelector('.radio-input[checked="checked"]').value);

}
//*************************************** */


// 1. Повторите действия указанные в уроке. Добавьте кнопку, при нажатии на которую считывается цвет выбранный пользователем (input type=color), и применяется к фону страницы.

let inpColor = document.querySelector('#inpColor');
let btnColor = document.querySelector('#btnColor');
let body = document.querySelector('body');

function btnColorF(){
  let a = inpColor.value;
  body.style.backgroundColor = a;
}
btnColor.onclick = btnColorF;

// 2. Создайте два input[type=color]. В одном пользователь может выбрать цвет фона, во втором цвет текста. При нажатии на кнопку Применить - примените эти цвета к странице. Также добавьте кнопку сброса цвета на черный-белый.

let inpColor2 = document.querySelector('#inpColor2');
let inpColor2_1 = document.querySelector('#inpColor2_1');
let btnColor2 = document.querySelector('#btnColor2');
let resetColor = document.querySelector('#resetColor');

function btnColor2F(){
  let a= inpColor2.value;
  let b = inpColor2_1.value;

  body.style.backgroundColor = a;
  body.style.color = b;
}
function resetColorF(){
  body.style.backgroundColor = '#fff';
  body.style.color = '#000';
}
btnColor2.onclick = btnColor2F;
resetColor.onclick = resetColorF;

// *****
// 3. Добавьте input[type=range] начальным значением которого есть число 14, а конечным 48. Ползунок установлен на 16. При изменении положения ползунка меняйте размер текста в соответствии со значением.
let range = document.querySelector('#range3');
let spanOut = document.querySelector('#out');
// 4. Рядом с созданным ползунком добавьте span куда выводите текущее значение ползунка. Для этого используйте событие input, oninput.
range.oninput = function(){
  c = range.value;
  body.style.fontSize = c + 'px';
  spanOut.innerHTML = c;
}
// *****


// 5. Создайте три input type=range. Значения от нуля до 255. Создайте блок, цвет rgb которого определятеся значением на ползунках. При изменении положения ползунков, изменяется цвет блока. Возле каждого ползунка выводить текущее значение цвета.

let rangeR = document.querySelector('#rangeR');
let spanOutR = document.querySelector('#outR');
let rangeG = document.querySelector('#rangeG');
let spanOutG = document.querySelector('#outG');
let rangeB = document.querySelector('#rangeB');
let spanOutB = document.querySelector('#outB');
let colorBody = document.querySelector('#colorBody');

colorBody.oninput = function(){
  r = rangeR.value;
  spanOutR.innerHTML = r;
  g = rangeG.value;
  spanOutG.innerHTML = g;
  b = rangeB.value;
  spanOutB.innerHTML = b;
  body.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ')';
  
  console.log( body.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ')' );
}