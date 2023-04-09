function ingresar(){
    var select1 = document.querySelector('#s1').value;
    var select2 = document.querySelector('#s2').value;
    var select3 = document.querySelector('#s3').value;

    var psw = select1 + select2 + select3;

    if (psw == '911'){
        document.querySelector('#resultado').innerHTML = 'Psw 1 Correcto';
    } else if (psw == '714') {
        document.querySelector('#resultado').innerHTML = 'Psw 2 Correcto';
    } else {
        document.querySelector('#resultado').innerHTML = 'Psw Incorrecto';

    }

}