window.onload = function() {
    var hexacalcul = document.getElementById('hexacalcul')
    hexacalcul.style.display = 'none'
}

function parrafosbinary() {
    var infonum = document.getElementById('infonum')
    var infonum2 = document.getElementById('infonum2')
    var numero = document.getElementById('numero').value
    var calculando = document.getElementById('calculando')
    calculando.innerHTML = parseInt(numero, 2);
    var ultimodigito = numero.charAt(numero.length - 1)
    if (numero == '') {
        calculando.innerHTML = ''
    }
    if (ultimodigito == 0 || ultimodigito == 1) {
        infonum2.innerHTML = 'Here is your decimal'
        infonum.innerHTML = ''
    } else {
        calculando.innerHTML = 'Waiting for a valid binary number...'
    }
    if (ultimodigito >> 1 || ultimodigito >> 9999999999) {
        infonum.innerHTML = 'You entered a non binary digit (please enter only 0 or 1)'
        infonum2.innerHTML = ''
    }
    if (ultimodigito == '') {
        infonum.innerHTML = ''
        infonum2.innerHTML = ''
    }
}

function hexadecimal() {
    var binarycalcul = document.getElementById('binarycalcul')
    var hexacalcul = document.getElementById('hexacalcul')
    binarycalcul.style.display = 'none'
    hexacalcul.style.display = 'block'
}

function binary() {
    var binarycalcul = document.getElementById('binarycalcul')
    var hexacalcul = document.getElementById('hexacalcul')
    binarycalcul.style.display = 'block'
    hexacalcul.style.display = 'none'
}

function parrafoshexa() {
    var infonumhexa = document.getElementById('infonumhexa')
    var infonumhexa2 = document.getElementById('infonumhexa2')
    var numerohexa = document.getElementById('numerohexa').value
    var calculandohexa = document.getElementById('calculandohexa')
    calculandohexa.innerHTML = parseInt(numerohexa, 16);
    var ultimodigitohexa = numerohexa.charAt(numerohexa.length - 1)
    if (numerohexa == '') {
        calculandohexa.innerHTML = ''
    }
    if (ultimodigitohexa == 0 || ultimodigitohexa == 1 || ultimodigitohexa == 2 || ultimodigitohexa == 3 || ultimodigitohexa == 4 || ultimodigitohexa == 5 || ultimodigitohexa == 6 || ultimodigitohexa == 7 || ultimodigitohexa == 8 || ultimodigitohexa == 9 || ultimodigitohexa == "A" || ultimodigitohexa == "B" || ultimodigitohexa == "C" || ultimodigitohexa == "D" || ultimodigitohexa == "E" || ultimodigitohexa == "F" || ultimodigitohexa == "a" || ultimodigitohexa == "b" || ultimodigitohexa == "c" || ultimodigitohexa == "d" || ultimodigitohexa == "e" || ultimodigitohexa == "f") {
        infonumhexa2.innerHTML = 'Here is your hexadecimal number'
        infonumhexa.innerHTML = ''
    } else {
        calculandohexa.innerHTML = 'Waiting for a valid hexadecimal number...'
        infonumhexa.innerHTML = 'You entered a non-hexadecimal digit (please enter only 0 to 9 and A to F)'
        infonumhexa2.innerHTML = ''
    }

    if (ultimodigitohexa == '') {
        infonumhexa.innerHTML = ''
        infonumhexa2.innerHTML = ''
    }
}