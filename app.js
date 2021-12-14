$(document).ready(function () {
    let expressoesHumanas = [
        { img: './img/angry.jpg', texto: 'Eu estou muito irritado' },
        { img: './img/drink.jpg', texto: 'Eu estou com sede' },
        { img: './img/food.jpg', texto: 'Eu estou com fome' },
        { img: './img/grandma.jpg', texto: 'Eu quero a vovó' },
        { img: './img/happy.jpg', texto: 'Eu estou feliz' },
        { img: './img/home.jpg', texto: 'Eu quero ir para casa' },
        { img: './img/hurt.jpg', texto: 'Eu me machuquei' },
        { img: './img/outside.jpg', texto: 'Eu quero sair' },
        { img: './img/sad.jpg', texto: 'Eu estou triste' },
        { img: './img/scared.jpg', texto: 'Eu estou assustado' },
        { img: './img/school.jpg', texto: 'Eu quero ir para escola' },
        { img: './img/tired.jpg', texto: 'Eu estou cansado' }
    ];

    let htmlImg = '';

    for (let posicao = 0; posicao < expressoesHumanas.length; posicao++) {
        let expressao = expressoesHumanas[posicao];
        htmlImg += `
        <div class="imagem d-flex flex-column" onclick="btnLerTexto('${expressao.texto}')">
            <img src="${expressao.img}" alt="${expressao.texto}" title="${expressao.texto}"/>
            <p>${expressao.texto}</p>
        </div>
        `;
    }

    $('main.imagens').html(htmlImg);

});

function btnLerTexto(texto){
    $('input[name="texto"]').val(texto);
    $('#formTexto').submit();
}


function onSubmitFormFalar(event){
    const texto = $('input[name="texto"]').val();
    event.preventDefault();
    lerTexto(texto);
}



function lerTexto(texto){
    
  const msg = new SpeechSynthesisUtterance();
  msg.volume = 1; //define o volume do áudio (de 0 a 1)
  msg.rate = 1; // define a velocidade do áudio (0.1 a 1)
  msg.pitch = 1; // define o tom em que o áudio é falado ( de 0 a 2)
  msg.text = texto;
  msg.lang = "pt-BR"; // Define o idioma a ser utilizado para a fala, no caso, o que foi definido para voice.lang
  
  speechSynthesis.speak(msg); //executa a voz
  

}