document.querySelector('.read-rules').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '-250px';
}

document.querySelectorAll('.read-rules-back').forEach(function (element) {
    element.onclick = function(){
        document.querySelector('.form-slider').style.marginLeft = '0';
    };
});

// Повторите действия видео по созданию слайдера правил
// Измените код так, чтобы возвратиться к правилам можно было по клику по нескольким элементам 