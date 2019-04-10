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

function login_user(){
    var login  = prompt('Кто пришел?','');
    var password;
    var MSGCANCEL = 'Вход отменен';
    if (login == 'Админ') {
        password = prompt('Пароль?', '');
        if (password == 'Черный Властелин') {
            alert('Добро пожаловать!');
        }
        else if (password == null) {
            alert(MSGCANCEL);
        }
        else {
            alert('Пароль неверен');
        }
    }
    else if (login == null) {
        alert(MSGCANCEL);
    }
    else {
        alert('Я вас не знаю');
    }
}

function hi_user() {
    var massage;
    var login  = prompt('Кто пришел?','');
    massage = (login == 'Вася') ? 'Привет' :
        login == 'Директор' ? 'Здраствуйте' :
            login == '' ? 'нет логина' :
                '';
    alert (massage);

}

function test_for() {
    for (var i=0; i<3; i++){
        alert(i);
    }
}