document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;
});
document.querySelectorAll('.modal-close').forEach(function (element) {
    element.onclick = hideWrap;
});
document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.onclick = hideWrap;
});
function showModal() {
    document.querySelector(this.dataset.modal).classList.remove('hide');
    document.onkeydown = function (e) {
        if (e.keyCode == 27) {
            document.querySelectorAll('.modal-wrap').forEach(function (element) {
                element.classList.add('hide');
                document.onkeydown = null;
            });
        }
    }
}
function hideWrap(e){
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        if( e.target.classList.contains('modal-wrap') || e.target.classList.contains('modal-close')) element.classList.add('hide');
        
    });
}

// ******* по итогу код был сжат до ДВУХ функций, сохранил работоспособность ESC + пофиксил баг. когда нажимали на само модальное окно (белый блок) все тоже закрывалось. *******


// Реализуйте модальное окно, которое показано в уроке. Продумайте возможности оптимизации и упрощения кода. Если необходима подсказка - оптимизация рассмотрена в бонусном видео к данному уроку.