// document.querySelector('#test').onkeypress = function (e) {
//     console.log(e.keyCode);
//     console.log(e.shiftKey);
//     if (e.keyCode < 97 || e.keyCode > 122) {
//         console.log('Недопустимые символы');
//     } 
//     else {
//         this.value += e.key;
//     }
//     // e.altKey false
//     // e.charCode 97
//     // e.code "KeyA"
//     // e.ctrlKey false
//     // e.key: "a"
//     // e.keyCode: 97
//     // e.shiftKey: false
//     return false;
// }
// let left = 0;

// document.onkeypress = function (e) {
//     console.log(e.keyCode);
//     let sq = document.querySelector('.sq');
//     if (e.keyCode == 100) {
//         left = left + 10;
//         sq.style.marginLeft = left + 'px';
//     }
//     if (e.keyCode == 97) {
//         left = left - 10;
//         sq.style.marginLeft = left + 'px';
//     }
// }

// document.onkeypress = function () { 
//     console.log('keypress');
// }
// document.onkeydown = function () {
//     console.log('keydown');
// }

// document.onkeyup = function () {
//     console.log('keyup');
// }


//*****************************************************************************

// Повторите действия урока.

// Создайте input в который пользователь может вводить текст на латинице. Используя события клавиатуры перехватывайте введенный символ - если пользователь ввел маленькую (строчную) букву, выводите ее. Если большую (пропись) - удаляйте. Ограничте возможность введения только буквами.
// let input1 = document.querySelector('#input1_1');
    
//     input1.onkeypress = function (e) {
//         console.log(e);
//         if(e.keyCode > 33 && e.keyCode < 97){ // сохраняем пробел
//             return false;
//         }
//         else if(e.keyCode < 31 || e.keyCode > 123){
//             return false;
//         }
//     }


// Создайте один блок внутри другого. На внутренний блок добавьте возможность сдвига блока вправо, влево, вверх, вниз с помощью клавиш стрелок. Бонус - добавьте на пробел возможность поворота фигуры вокруг оси на 45 градусов.

// let left = 0;
// let top1 = 0;
// let rotate = 0;

// document.onkeydown = move;

// function move (e) {
//     console.log(e.keyCode);
//     let sq = document.querySelector('.sq');
//     if (top1 < 240 && top1 > -1 && left < 740 && left > -1) {
//         if (e.keyCode == 100 || e.keyCode == 39 || e.keyCode == 68) {
//             left += 10;
//             sq.style.left = left + 'px';
//         }
//         else if (e.keyCode == 97 || e.keyCode == 37 || e.keyCode == 65) {
//             left -= 10;
//             sq.style.left = left + 'px';
//         }
//         else if (e.keyCode == 115 || e.keyCode == 40 || e.keyCode == 83) {
//             top1 += 10;
//             sq.style.top = top1 + 'px';
//         }    
//         else if (e.keyCode == 119 || e.keyCode == 38 || e.keyCode == 87) {
//             top1 -= 10;
//             sq.style.top = top1 + 'px';
//         }
//         else if (e.keyCode == 32) {
//             rotate += 30;
//             sq.style.transform = 'rotate(' + rotate + 'deg)';
//         }
//     }
//     else {
//         sq.style.top = 0;
//         sq.style.left = 0;
//         top1 = 0;
//         left = 0;
//         return;
//     }
// }



// Напишите программу которая при нажатии кнопки клавиатуры меняет символ на произвольный.

// let input3_1 = document.getElementById('input3_1')
// let parent = document.getElementById('parent');
// let ch = '';

// //функция ловит любые нажатия, меняет чракод и выбрасывает в инпут
// parent.onkeydown = function change(e){
//     console.log('приходит - ' + e.keyCode);

//     let rand = 48 + Math.random() * (122 + 1 - 48);
//         rand = Math.floor(rand);

//         ch += String.fromCharCode(rand);

//     console.log('отдаем - ' + rand);

//     return input3_1.innerHTML = ch;
// }

//  //функция которая блокирует вывод любой кнопки В САМОМ ИНПУТЕ, в итоге иметируем нажатие.
// input3_1.onkeypress = function (e) { 
//     if(e.keyCode >= 48 || e.keyCode <= 122){
//         return false;
//     }
// }



// Напишите программу шутку которая меняет введенный символ q на w, w на e и т.д. Т.е. выполняет сдвиг на одну клавишу влево на клавиатуре. Последние символы строк меняет так: ] на q, \ на a, / на z. Возможно для решения потребуется массив.

// let array = [   
//                 [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220], //большие буквы onkeydown
//                 [65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222],
//                 [90, 88, 67, 86, 66, 78, 77, 188, 190, 191]
//             ];


let array = [   
                [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92], //маленькие буквы onkeypress
                [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39],
                [122, 120, 99, 118, 98, 110, 109, 44, 46, 47]
            ];



let ink = '';
document.getElementById('keyIncParent').onkeypress = function (e) {
    if (e.keyCode == 16 || e.keyCode == 17 || e.keyCode == 18) { //проверка на шифт ктрл авьт
        return false;            
    }
    else if(e.keyCode == 32){ // сохраняем пробел
        ink += String.fromCharCode(32);
        console.log(ink);
    }
    else{ // если не пробел заходим
        outer: //лейбл для брейков
        for (var i = 0; i < array.length; i++) {  //цикл по подмасивам (линиям на клаве)
            for (let j = 0; j < array[i].length; j++) {  //цикл по елементам массива (каждой кнопке)

                // if(j + 1 == array[i].length) { //попытка сделать првоерку на нажатие последних кнопок масива
                //     ink += String.fromCharCode(array[i][0]);
                //     console.log(ink);
                //     break outer;                    
                // }
                if(e.keyCode == 92){ // проверка на нажатие последней кнопки массива первой линии
                    ink += String.fromCharCode(array[0][0]);                    
                    break outer;
                }
                else if(e.keyCode == 39){ // проверка на нажатие последней кнопки массива второй линии
                    ink += String.fromCharCode(array[1][0]);                    
                    break outer;
                }
                else if(e.keyCode == 47){ // проверка на нажатие последней кнопки массива третий линии
                    ink += String.fromCharCode(array[2][0]);                    
                    break outer;
                }                
                else if(e.keyCode == array[i][j]){ // в любом другом случае ищем кнопку по всем массивам
                    ink += String.fromCharCode(array[i][j + 1]); //у найденого елемента смещаем индекс на + 1
                    break outer;
                }
                // console.log(array[i][j])
            }
            // console.log(array[i])
        }
    }
    document.getElementById('input4_1').innerHTML = ink;

    // console.log(e.code);
    // console.log(e.keyCode);
}
 //функция которая блокирует вывод любой кнопки В САМОМ ИНПУТЕ, в итоге иметируем нажатие.
document.getElementById('input4_1').onkeypress = function (e) { 
    if(e.keyCode >= 48 || e.keyCode <= 122){
        return false;
    }
}

// console.log(array[0][0]);
// console.log(array[1][0]);
// console.log(array[2][0]);


// let line1 = {
//     "KeyQ": 81, 
//     "KeyW": 87, 
//     "KeyE": 69, 
//     "KeyR": 82, 
//     "KeyT": 84, 
//     "KeyY": 89, 
//     "KeyU": 85, 
//     "KeyI": 73, 
//     "KeyO": 79, 
//     "KeyP": 80, 
//     "BracketLeft": 219, 
//     "BracketRight": 221,
//     "Backslash": 220};

// let line2 ={
//     "KeyA": 65, 
//     "KeyS": 83, 
//     "KeyD": 68, 
//     "KeyF": 70, 
//     "KeyG": 71, 
//     "KeyH": 72, 
//     "KeyJ": 74, 
//     "KeyK": 75, 
//     "KeyL": 76, 
//     "Semicolon": 186, 
//     "Quote": 222};

// let line3 ={
//     "KeyZ": 90, 
//     "KeyX": 88, 
//     "KeyC": 67, 
//     "KeyV": 86, 
//     "KeyB": 66, 
//     "KeyN": 78, 
//     "KeyM": 77, 
//     "Comma": 188, 
//     "Period": 190, 
//     "Slash": 191};