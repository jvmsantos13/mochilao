function calcular () {
    let pais1 = document.querySelector('.peru').value;
    let pais2 = document.querySelector('.chile').value;
    let pais3 = document.querySelector('.bolivia').value;
    let pais4 = document.querySelector('.uruguai').value;
    let pais5 = document.querySelector('.argentina').value;
    let retorno = document.querySelector('.voltar').value;

    let resultado  = parseInt(pais1) + parseInt(pais2) + parseInt(pais3) + parseInt(pais4) + parseInt(pais5) + parseInt(retorno);

 document.querySelector('.resultado').innerHTML = 'Seu custo total de viagem é de R$ ' + resultado;

}