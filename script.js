function calcular () {
    let pais1 = document.getElementsByClassName('peru').value;
    let pais2 = document.getElementsByClassName('chile').value;
    let pais3 = document.getElementsByClassName('bolivia').value;
    let pais4 = document.getElementsByClassName('uruguai').value;
    let pais5 = document.getElementsByClassName('argentina').value;
    let retorno = document.getElementsByClassName('voltar').value;

    let resultado  = parseInt(pais1) + parseInt(pais2) + parseInt(pais3) + parseInt(pais4) + parseInt(pais5) + parseInt(retorno);

    document.getElementsByClassName('resultado').innerHTML = resultado;

    console.log(resultado);
}