function calcular() {
    document.querySelector('.resultado').innerHTML = '';
    const itens = document
      .querySelectorAll("input[type='checkbox']:checked");
    let values = 0; 
    if (itens.length > 0) {
      for(let i = 0; i < itens.length; i++) {
        values = values + (parseFloat(itens[i].value));
      }
     document.querySelector('.resultado').innerHTML = 'Seu custo total de viagem é de R$ ' + values + ',00 reais';
    }
  }