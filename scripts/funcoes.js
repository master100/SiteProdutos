function mensagem(texto) {
    alert(texto);
}

function CalculaMediaProvaTeste(prova, teste) {
    var media = (prova + teste) / 2;
    return media;
}

function ValidaNumero(inputData, e) {

    var tecla;

    tecla = e.which;

    if (tecla >= 47 && tecla < 58) { // numeros de 0 a 9 e '/'
        var data = inputData.value;

        inputData.value = data;
        return true;

    }
    else
        return false;
}