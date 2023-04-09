function calcular(){
    var sticker1 = Number(document.querySelector('#n1').value);
    var sticker2 = Number(document.querySelector('#n2').value);
    var sticker3 = Number(document.querySelector('#n3').value); 

    var suma = sticker1 + sticker2 + sticker3;

    if (suma <= 10){
    document.querySelector('#resultado').innerHTML = "Llevas " + suma + " stickers";
    } else {
    document.querySelector('#resultado').innerHTML = 'Llevas muchos Stickers';
    }
}
