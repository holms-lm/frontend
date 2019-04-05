function quastion() {
    var name_js = prompt('Какаво "официальное" название JavaScript?','JavaScript');
    if(name_js == 'EcmaScript'){
        alert('Верно!');
    }
    else {
        alert('Не знаете? "EcmaScript!"');
    }
}
function quastion_numner() {
    var custom_number = prompt('Введите любое число', 0);
    if(custom_number > 0){
        alert(1);
    }
    else if(custom_number < 0) {
        alert(-1);
    }
    else {
       alert(0);
    }
}