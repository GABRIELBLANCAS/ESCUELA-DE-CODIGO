function Restar() {
    // mandar a llamar el elemento con getElement por id en este caso es txtN1
    var n1 = document.getElementById('txtN3').value;
    var n2 = document.getElementById('txtN4').value;
    var resta = parseInt(n1) - parseInt(n2);
    alert("la resta es: " + resta);   
}



function Multiplicacion() {
    var n1 = document.getElementById('txtN3').value;
    var n2 = document.getElementById('txtN4').value;
    var Multiplicacion = parseInt(n1) * parseInt(n2);
    alert(" la multiplicacion es: " + Multiplicacion);
}




function Division() {
    var n1 = document.getElementById('txtN3').value;
    var n2 = document.getElementById('txtN4').value;
    var dividir = parseInt(n1) / parseInt(n2);
    alert("la divicion de " + n1 + " / " + n2 + " es " + dividir);
}









// |   tecla arriba de tab

// signo and con tecla shif + 6
// &




function Borrar() {
    document.getElementById('resultado').innerHTML = '';
    
}
// funcion para sumar
function Suma(){
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    
    if(n1 == "" | n2 == ""){
        alert( "ERROR ingresa un valor numerico");
    }
    // if(n2 == ""){
    //     alert( "ERROR ingresa un valor numerico");
    // }
    else{

        // realizando la operacion con variables que estan parseadas a enteros
        var suma = parseInt(n1) + parseInt(n2);
        // disparando unalerta con una concatenacion de un texto y el valor de la operacion
        // alert("La Suma  de  "+ n1 + "  + "  + n2 +" es : " + suma);
        document.getElementById('resultado').innerHTML = 'el resultado es: '  + suma;
    + suma;
    }

}   
         

// funcion para restar
function Resta(){
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    if(n1 == ""  |  n2 == ""){
        alert( "ERROR ingresa un valor numerico");
    }
    // if(n2 == ""){
    //     alert( "ERROR ingresa un valor numerico");
    // }
    else{

        // realizando la operacion con variables que estan parseadas a enteros
        var resta = parseInt(n1) - parseInt(n2);
        // disparando unalerta con una concatenacion de un texto y el valor de la operacion
        // alert("La Resta de  "+ n1 + "  - "  + n2 +" es : " + resta);
        document.getElementById('resultado').innerHTML = 'el resultado es: ' + resta;
    }
}




// funcion para multiplicar
function Multi(){
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    if(n1 == "" | n2== ""){
        alert( "ERROR ingresa un valor numerico");
    }
    // if(n2 == ""){
    //     alert( "ERROR ingresa un valor numerico");
    // }
    else{

        // realizando la operacion con variables que estan parseadas a enteros
        var multiplicacion = parseInt(n1) * parseInt(n2);
        // disparando unalerta con una concatenacion de un texto y el valor de la operacion
        // alert("La multiplicación de  "+ n1 + "  X "  + n2 +" es : " + multiplicacion);
        document.getElementById('resultado').innerHTML = 'el resultado es: ' + multiplicacion;
    }
}


// funcion para Dividir
function Divi(){
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    if(n1 == "" | n2 ==""){
        alert( "ERROR ingresa un valor numerico");
    }
    // if(n2 == ""){
    //     alert( "ERROR ingresa un valor numerico");
    // }
    else{

        // realizando la operacion con variables que estan parseadas a enteros
        var division = parseInt(n1) / parseInt(n2);
        // disparando unalerta con una concatenacion de un texto y el valor de la operacion
        // alert("La multiplicación de  "+ n1 + "  / "  + n2 +" es : " + division);
        document.getElementById('resultado').innerHTML = 'el resultado es: ' + division;
    }
}
              
              