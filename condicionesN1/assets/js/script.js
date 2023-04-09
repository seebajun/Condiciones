function borde(){   
    let borderOn = '2px';
    let borderOff = '0px';
    let boton = document.querySelector('#foto');

    if (boton.style.borderWidth == borderOff){
        boton.style.borderWidth = borderOn;
    } else {
        boton.style.borderWidth = borderOff;
    }
} 
