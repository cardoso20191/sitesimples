/* 
   Ativa o modo estrito do JavaScript.
   Ele ajuda a evitar erros comuns, 
   como uso de variáveis não declaradas.
*/

'use strict' 

// Seleciona o botão que tem a classe "btn"
const switcher = document.querySelector('.btn');

/* 
   Adiciona um evento de clique ao botão.
   Quando o botão é clicado, será executada a função abaixo.
*/
switcher.addEventListener('click', function(){

// Alterna (adiciona/remove) a classe "dark-theme" no body
// Se já tiver, remove; se não tiver, adiciona
    document.body.classList.toggle('dark-theme')

// Pega o nome da classe atual aplicada no body
    var className = document.body.className;

 /* 
       Se o body estiver com a classe "light-theme",
       o botão mostra "Tema Escuro", indicando a ação possível.
       Caso contrário, mostra "Tema Claro".
    */
    if(className =="light-theme"){
        this.textContent = "Tema Escuro";
    }
    else{
        this.textContent = "Tema Claro";
    }
});

/*
        console.log('current class name' +className);
    */