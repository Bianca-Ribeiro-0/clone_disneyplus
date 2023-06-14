//Adicionando evento p/ escutar quando o DOM terminou de carregar
document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]') ; //pegando tds os botões da lista
    const questions = document.querySelectorAll('[data-faq-question]');
    //Adicionando um evento ao clique de tds os botões com for

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`); //pesquisa pela data-tab-id onde o valor seja = abaAlvo
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active'); //na aba clicada irá adicionar a classe active
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0; i < questions.length; i++) { //acessando os 4 elementos do faq
        questions[i].addEventListener('click', abreOuFechaResposta); //adicionando um evento e a function
    }
})

function abreOuFechaResposta(elemento){   
  const classe =  'faq__questions__item--is-open'; //criando constante classe que deve ser acessada com o id --is-open (pergunta)
  const elementoPai = elemento.target.parentNode; //apos investigar no target temos o elemento filho (li), acessamos o elementoPai (li) este que deve ser removido
  
  elementoPai.classList.toggle(classe); //adicionando elemento toggle
}

function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); //pegando tds que contenham esse id, assim retornando o botao

    for(let i=0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active'); //a aba atual irá remover a classe active
    }
}