// XMLHttpRequest
function ajax(url, method, functionName, dataArray) {
    let xhttp = new XMLHttpRequest(); // создаем новый запрос
    xhttp.open(method, url, true);  //открываем соединение
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //указываем способ отправки
    xhttp.send(requestData(dataArray)); // что отправляем, инициализируем отправку

    xhttp.onreadystatechange = function () { //проверка ответа от сервера
        if (this.readyState == 4 && this.status == 200) { //ответ от сервера
            functionName(this); //то что выполняется по ajax запросу
        }
    }
}

function requestData(dataArr) { //функция приводит массив данных в строку для запроса
    let out = '';
    for (let key in dataArr) {
        out += `${key}=${dataArr[key]}&`;
    }
    // console.log(out);
    return out;
}


// Unit 1.
// Пошлите на сервер (unit1.php ) два числа (целых) с именами a и b. Перед отправкой убедитесь, что a < b. Если все сделано корректно, сервер вернет случайное число из заданного вами диапазона. Выведите число в консоль.]
// document.querySelector('#send').onclick = function () {
//     let num1 = +document.querySelector('#inp1').value;
//     let num2 = +document.querySelector('#inp2').value;
//     let nums = { "a": num1,
//                  "b": num2};
//     if(isNaN(num1) || isNaN(num2)){
//         alert('error')

//     }
//     else if(isInteger(num1) && isInteger(num2) && num1 < num2){
//         ajax('unit1.php', 'POST', randNum, nums);

//     }
//     else{
//         alert('try again');
//     }
// }
// function randNum(data) {
//     console.log(data.response);
// }
// function isInteger(num) {
//   return (num ^ 0) === num; //првоерка на целое число
// }



// Unit 2.
// Пошлите на сервер (unit2.php ) два числа (целых) с именами a и b. Сервер вернет:
//  - если a>b то 1
//  - eсли b>a то 2
//  - eсли b==a то 'equal'
//  - в остальных случаях eror.
 

// document.querySelector('#send').onclick = function () {
//     let num1 = +document.querySelector('#inp1').value;
//     let num2 = +document.querySelector('#inp2').value;
//     let nums = { "a": num1,
//                  "b": num2};
//     if(isNaN(num1) || isNaN(num2)){
//         alert('error')

//     }
//     else if(isInteger(num1) && isInteger(num2)){
//         ajax('unit2.php', 'POST', randNum, nums);

//     }
//     else{
//         alert('try again');
//     }
// }
// function randNum(data) {
//     console.log(data.response);
// }
// function isInteger(num) {
//   return (num ^ 0) === num; //првоерка на целое число
// }




// Unit 3.
// Пошлите на сервер (unit3.php )текст из элемента textarea. Текст посылаете в виде строки с именем t1. Текст - только латиница! Если все сделано корректно, то сервер вернет статистику по встречаемым словам в виде json строки.
// Доп. задание - проверить текст на латинские символы.

// document.querySelector('#btn').onclick = function () {
//     let string = document.querySelector('#textAr').value;
//     let str = { "t1": string + ''};
//     if(checkStr(string)){
//         ajax('unit3.php', 'POST', randStr, str);
//     }
//     else{
//         alert('only cirillic please');
//     }
// }

// function randStr(data) {
//     console.log(data.response);
// }

// function checkStr(str) {  // првоерка на латиницу
//     return /^[a-zA-Z0-9 ,.\-:"()]*?$/.test(str);
// }
// console.log(checkStr('asdfr'));
// console.log(checkStr('фыа'));




// Unit 4.
// Пошлите на сервер (unit4.php ) url адрес сайта. Текст посылаете в виде строки с именем geturl. Если все сделано корректно, то сервер вернет страницу указанного сайта!

document.querySelector('#btn4').onclick = function () {
    let string = document.querySelector('#inp4').value;
    let str = { "geturl": string + ''};
        ajax('unit4.php', 'POST', randURL, str);
}

function randURL(data) {
    console.log(data.response);
}
