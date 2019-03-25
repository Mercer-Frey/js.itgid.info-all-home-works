// document.querySelector('.push').onclick = function () {

//     // данные из input type = radio
//     // console.log(document.querySelector('.radio-input[checked="checked"]').value);

//     let radio = document.querySelectorAll('.radio-input');
//     //console.log(radio);
//     //radio[0].hidden = true;
//     for (let i = 0; i < radio.length; i = i + 1) {
//         //console.log(radio[i].checked);
//         if (radio[i].checked) {
//             console.log(radio[i].value);
//         }
//     }

//     let p = document.querySelectorAll('p');
//     console.log(p);
//     for (let i = 0; i < p.length; i = i + 1) {
//         p[i].style.color = 'red';
//     }

//     let option = document.querySelectorAll('#my-select option');
//     console.log(option);
//     for (let i = 0; i < option.length; i = i + 1) {
//         // console.log(option[i].selected);
//         if (option[i].selected) {
//             console.log(option[i].innerHTML);
//         }
//     }
// }

// 1. Выведите на экран

// let out = document.getElementById('out');
// let str = 'вывожу на экран';

// out.innerHTML = str;

// 2. Вывести четные числа от 0 до 101.

// let out = document.getElementById('out');
// let str = '';
// 	for (let i = 0; i <= 101; i += 2) {
//     str += i + ' ';
//     console.log(str);
// 	}
// out.innerHTML = str;

// 3. Вывести числа в следущей последовательности: 200 199 198 ... 0.

// let out = document.getElementById('out');
// let str = '';
// 	for (let i = 200; i >= 0; i--) {
//     str += i + ' ';
//     console.log(str);
// 	}
// out.innerHTML = str;

// 4. Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5).

// let out = document.getElementById('out');
// let str = 0;
// 	for (let i = 1; i <= 100; i++) {
//     str += i;
//     console.log(str);
// 	}
// out.innerHTML = str;

// 5. Задайте два input. В первый вводится число, во второе его степень. С помощью цикла возведите число в степень. Напечатайте результат.

// let out = document.getElementById('out');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let btnOut = document.querySelector('#btnOut');

// function powOut(){
//   let result = 1;
//   let num1 = inp1.value;
//   let num2 = inp2.value;
//   for (let i = 1; i <= num2; i++) {
//     result *= num1;
//     console.log(result);
//     if(num2 == i){
//       alert(result);
//     }
//   }
// }

// btnOut.onclick = powOut;

// 6. С помощью цикла напечатайте таблицу умножения на 7 от 1 до 9.
// Т.е.: 
// 1*7=7  
// 2*7=14 
// 3*7=21...

// let out = document.getElementById('out');
// let str = '';
// 	for (let i = 1; i <= 10; i++) {
// 		str += 7 +' * '+ i +' = '+ 7*i + '<br>';
// 	}
// out.innerHTML = str;

// 7. С помощью цикла вывести произведение чисел от 1 до 50.

// let out = document.getElementById('out');
// let str = 1;
// 	for (let i = 1; i <= 50; i++) {
//     str *= i;
//     console.log(str);
// 	}
// out.innerHTML = str;

// 8. Выведите с помощью цикла коды спецсимволов от 1000 до 2000. Напомню, что спецсимвол получается комбинацией &#число; Например &#1222;

// let out = document.getElementById('out');
// let str = '';
// 	for (let i = 1000; i <= 2000; i++) {
// 		str += '&#'+ i + ' ';
// 	}
// out.innerHTML = str;

// 9. Получите все параграфы внутри div.main страницы. Используя цикл пронумеруйте все параграфы. Номер добавьте внутри тега параграфа перед текстом.
// let allP = document.querySelectorAll('div.main p');
// console.log(allP);

// for (let i = 0; i < allP.length; i++) {
//   allP[i].insertAdjacentHTML('afterbegin', i + 1 + ' ');
// };

// 10. Создайте два поля. В одно пользователь вводит день рождения, во второй - месяц (в виде числа). Выведите знак зодиака под каким родился пользователь. Данные о знаке зодиака храните в массиве.

// let array = {
//     "козерог" : [
//                     [22, 12],
//                     [19, 1]
//                 ],

//     "володей" :   [
//                     [20, 1],
//                     [18, 2]
//                 ],            

//     "рыбы" :   [
//                     [19, 2],
//                     [20, 3]
//                 ],            

//     "овен" :   [
//                     [21, 3],
//                     [19, 4]
//                 ],            

//     "телец" :   [
//                     [20, 4],
//                     [20, 5]
//                 ],            

//     "близнецы" :   [
//                     [21, 5],
//                     [20, 6]
//                 ],            

//     "рак" :   [
//                     [21, 6],
//                     [22, 7]
//                 ],            

//     "лев" :   [
//                     [23, 7],
//                     [22, 8]
//                 ],            

//     "дева" :   [
//                     [23, 8],
//                     [22, 9]
//                 ],            

//     "весы" :   [
//                     [23, 9],
//                     [22, 10]
//                 ],            

//     "скорпион" :   [
//                     [23, 10],
//                     [21, 11]
//                 ],            

//     "стрелец" :   [
//                     [22, 11],
//                     [21, 12]
//                 ]
// };

// let inp10_1 = document.querySelector('#input10_1');
// let inp10_2 = document.querySelector('#input10_2');
// let btn10 = document.querySelector('#btn10');

// btn10.onclick = function () {
//     let userD = +inp10_1.value;
//     let userM = +inp10_2.value;

//     for (let key in array){
//         if (isNaN(userD) || isNaN(userM)) {alert('Введите корректное число')}

//         else if(userD >= array[key][0][0] 
//             && userD < 32 
//                 && array[key][0][1] == userM) {

//             alert(key);
//         }
//         else if(userD <= array[key][1][0] 
//             && userD > 0 
//                 && array[key][1][1] == userM){

//             alert(key);
//         }
//     };
//     console.log( userD + userM);
// };

// for (let key in array){
//     console.log(array[key][0][0]); //день
//     console.log(array[key][0][1]); //месяц
// };

// 11. С помощью JS найдите все span на странице и сделайте им цвет фона - желтый.

// let allSpan = document.querySelectorAll('span');
// for (let i = 0; i < allSpan.length; i++) {  
//   allSpan[i].style.backgroundColor = 'yellow';
// }

// 12. Выведите внизу страницы информацию о количестве параграфов.

// let allP = document.querySelectorAll('div.main p');
// let countP = document.querySelector('#countP');
//   countP.innerHTML = 'колличество параграфов: ' + allP.length;

// 13. Создайте массив состояний из единицы и 5 нулей. Т.е. [1, 0,0,0,0,0]. Выведите массив на страницу. Добавьте кнопку. При каждом нажатии кнопки смещайте единицу вправо на одну позицию и заново выводите массив в тот же блок что и раньше. Если единица достигла конца массива - не делайте ничего.

// let btnMas = document.querySelector('#btnMas');
// let out2 = document.querySelector('#out2');
// let mas = [1, 0,0,0,0,0];
//     out2.innerHTML = mas;

// function oneRight(){
//     loop:for (var i = 0; i < mas.length; i++) {
//         if(i + 1 == mas.length){
//             break loop;
//         }
//         else if(mas[i] == 1){
//             mas[i] = 0;
//             mas[i + 1] = 1;
//             break loop;
//         }
//     }
//   out2.innerHTML = mas;
//   console.log(mas);
// }

// btnMas.onclick = oneRight;

// 14. Создайте массив с произвольными числами. Выведите количество элементов массива меньше нуля.

// let randMas = [-4, -5, 6, 7, 23, -3, -3, -3, 6, -92, 5, 76, 87, 4, -3, -7];

// function randMasF () {
//     let count = 0;

//     for (let i = 0; i < randMas.length; i++) {
//         if (randMas[i] < 0) {
//             count++;
//         } 
//     }
//     document.querySelector('body').insertAdjacentHTML('beforeend', 'количество элементов массива меньше нуля: ' + count);
// };
// randMasF();

// 15. Создайте массив с произвольными числами. Выведите элементы массива меньше нуля.

// let randMas = [-4, -5, 6, 7, 23, -3, -3, -3, 6, -92, 5, 76, 87, 4, -3, -7];

// function randMasF () {
//     let count = '';

//     for (let i = 0; i < randMas.length; i++) {
//         if (randMas[i] < 0) {
//             count += randMas[i] + ' ';
//         } 
//     }
//     document.querySelector('body').insertAdjacentHTML('beforeend', 'элементы массива меньше нуля: ' + count);
// };
// randMasF();


// 16. Создайте input куда пользователь может ввести количество элементов массива. После нажатия кнопки создается массив заданной длинны заполненный единицами.

// let masLen = document.querySelector('#masLen');
// let btnMas = document.querySelector('#btnMas');

//     btnMas.onclick = function () {
//         let num = masLen.value;
//         let newMas = [];

//         for (let i = 0; i < num; i++) {
//             newMas.push(1);
//         }
//         console.log(newMas);

//         document.querySelector('body')
//             .insertAdjacentHTML('beforeend', 'новый массив с ' 
//                 + num + ' еденичками: [' + newMas + ']' );
//     }

// 17. Создайте input куда пользователь может ввести количество элементов массива. После нажатия кнопки создается массив заданной длинны заполненный случайными числами от 0 до 100.


// let masLen = document.querySelector('#masLen');
// let btnMas = document.querySelector('#btnMas');

//     btnMas.onclick = function () {
//         let num = masLen.value;
//         let newMas = [];

//         for (let i = 0; i < num; i++) {

//             let rand = 0 + Math.random() * (100 + 1 - 0);
//                 rand = Math.floor(rand);

//             newMas.push(rand);
//         }
//         console.log(newMas);
//         document.querySelector('body')
//             .insertAdjacentHTML('beforeend', 'новый массив с ' 
//                 + num + ' рандомными числами: [' + newMas + ']' );
//     }


// 18. Создайте массив заполненный числами и строками. Используя цикл создайте другой массив куда поместите только числа из первого массива.

// let randMas = [-4, 'hi', -5, 6,'hey', 7, 23, 'hello', -3, -3,'im here', -3, 6, -92, 5, 76, 87, 'catch',4, -3, 'no, im here', -7];

// function randMasF () {
//     let newMas = [];

//     for (let i = 0; i < randMas.length; i++) {
//         if ( !isNaN(randMas[i])) {
//             newMas.push(randMas[i]);
//         } 
//     }
//     document.querySelector('body').insertAdjacentHTML('beforeend', 'числа массива: ' + newMas);
// };
// randMasF();


// 19. Создайте массив. Выведите максимальное значение из этого массива.

// let randMas = [-4, -5, 6, 7, 23, -3, -3, -3, 6, -92, 5, 76, 87, 4, -3, -7];

// function randMasF () {
//     let min = randMas[0];
//     let max = min;
    
//         for (i = 1; i < randMas.length; ++i) {
//             if (randMas[i] > max) {
//                 max = randMas[i];
//             }
//             if (randMas[i] < min) {
//                 min = randMas[i];
//             }
//         }

//     document.querySelector('body')
//         .insertAdjacentHTML('beforeend', 'числа массива: <br>' 
//             + 'min - (' + min + ')<br> max - (' + max + ')');
// };
// randMasF();


// 20! Сложное! Создайте массив и заполните его значениеми. Выведите статистику - сколько раз в массиве повторяется то или инное значение.



// let newElem = 0;
// let countElev = 0;



let randMas = [2, 'a', 2, 'b', 3, 3, 'a', 'b', 2, 1, 'a', 1, 2, 3];

function arrStat(){
    let B = [];  // новый масив в который будем собирать подмассивы
    let b = 0;   //счетчик новых подмасивов

    for (let i = 0; i < randMas.length; i++){
      let k = 0; //вспомогательная переменная для фильтра от повторений
      let count = 1; // счетчик коллчиества совпадений

       while (k < b && B[k][0] !== randMas[i]) //сам фильтр
        k++;

        if (k === b){  // и проверка
            for (let j = i+1; j < randMas.length; j++){ // сравниваем по масиву каждый отдельный елемент
                if (randMas[i] === randMas[j]) // если есть совпадения
                    count++; //записываем сколько раз совпало
            }
            B[b++] = [randMas[i], count]; // составляем новый подмасив и записываем в новую ячуйку основного масива
        }
     }

    console.log(B);
}
arrStat();





