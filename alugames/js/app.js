function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = document. querySelector('.dashboard__item__img');
    let botao = document.querySelector('.dashboard__item__button');

 if(imagem.classList.contains('dashboard__item__img--rented')) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
 } else{
    imagem,classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver';
    botao.textContent.add('dashboard__item__button--return');
 } 
}
       

   