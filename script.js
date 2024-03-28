function converter() {

    var numero = demo1.value;

    var baseSelect = select_bases.value

    if (baseSelect == "decimal" == "NaN" || baseSelect == "binario" || baseSelect == "hexadecimal" || baseSelect == "octal") {
        msg_octal.innerHTML = "Valor invalido"
    }

    if (baseSelect == "decimal") {
        var devolverDec = parseInt(numero,10);
    
        let decimal = devolverDec.toString(10)

        let octal = devolverDec.toString(8);
    
        let binaria = devolverDec.toString(2);
    
        let hexadecimal = devolverDec.toString(16);

        document.getElementById("msg_octal").innerHTML = `Octal: ${octal}`;
        document.getElementById("msg_hexadecimal").innerHTML = `Hexadecimal: ${hexadecimal.toUpperCase()}`;
        document.getElementById("msg_binario").innerHTML = `Binario: ${binaria}`;
    }

    if (baseSelect == "binario") {
        var devolverDec = parseInt(numero,2);
    
        let decimal = devolverDec.toString(10)

        let octal = devolverDec.toString(8);
    
        let binaria = devolverDec.toString(2);
    
        let hexadecimal = devolverDec.toString(16);

        document.getElementById("msg_decimal").innerHTML = `Decimal: ${decimal}`;
        document.getElementById("msg_octal").innerHTML = `Octal: ${octal}`;
        document.getElementById("msg_hexadecimal").innerHTML = `Hexadecimal: ${hexadecimal.toUpperCase()}`;
    }

    if (baseSelect == "octal") {
        var devolverDec = parseInt(numero,8);

        let decimal = devolverDec.toString(10)

        let octal = devolverDec.toString(8);
    
        let binaria = devolverDec.toString(2);
    
        let hexadecimal = devolverDec.toString(16);

        document.getElementById("msg_decimal").innerHTML = `Decimal: ${decimal}`;
        document.getElementById("msg_hexadecimal").innerHTML = `Hexadecimal: ${hexadecimal.toUpperCase()}`;
        document.getElementById("msg_binario").innerHTML = `Binario: ${binaria}`;
    }

    if (baseSelect == "hexadecimal") {
        var devolverDec = parseInt(numero,16);

        let decimal = devolverDec.toString(10)

        let octal = devolverDec.toString(8);
    
        let binaria = devolverDec.toString(2);
    
        let hexadecimal = devolverDec.toString(16);

        document.getElementById("msg_decimal").innerHTML = `Decimal: ${decimal}`;
        document.getElementById("msg_octal").innerHTML = `Octal: ${octal}`;
        document.getElementById("msg_binario").innerHTML = `Binario: ${binaria}`;
    }



}


function aparecer_bin() {
    demo4.style.display = 'block'
}

function aparecer_hexa() {
    demo3.style.display = 'block'
}

function aparecer_octal() {
    demo2.style.display = 'block'
}