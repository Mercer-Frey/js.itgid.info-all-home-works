let select = document.querySelector('#select-1');
let radio = document.querySelectorAll('input[name="rad-1"]');
radio.forEach(function(element){
    element.onchange = function(){
        console.log(this.value);
    }
})
select.onchange = function () {
    console.log(select.value);
}

let sendForm = document.querySelector('#send-form');
let form = document.querySelector('form');
sendForm.onclick = function (event) {
    event.preventDefault();
    console.log('work');
    console.log(serialize(form));
}