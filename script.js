let novaPalavra = document.querySelector('#novaPalavra');
let btnJogar = document.querySelector('#jogar');
let btnDica = document.querySelector('#dica');
let caixas = document.querySelector('.caixaPalavra');
let historico = document.querySelector('#letrasDigitadas');

let palavras = ['ESCOLA', 'CARRO', 'GELADEIRA', 'COMPUTADOR', 'PADEIRO', 'CASA', 'CHURRASCO', 'BATATA', 'BURRO', 'TECLADO', 'TELA', 'JAVASCRIPT', 'CIDADE', 'HOSPITAL', 'MONITOR'];
let letrasDigitadas = [];

window.addEventListener('load', () =>{
   let acertos = 0;
   let erros = 6;
   let chave = Math.floor(Math.random() * palavras.length);
   let letraEmPalavras = palavras[chave].split('');
   let vida = document.querySelectorAll('.vida');

   for (let i = 0; i < palavras[chave].length; i++) {
      caixas.innerHTML += '<div class="letras"></div>';
   }

   novaPalavra.addEventListener('click', () => {
      location.reload();
   });


   btnDica.addEventListener('click', () => {
      alert(palavras[chave])
   });

   btnJogar.addEventListener('click', () => {
      let a = document.querySelector('#letra');
      let letra = document.querySelector('#letra').value.toUpperCase();
      a.value = '';
      a.focus();


      if (letra.length === 0 || letra.length > 1) {
         alert('Valor inválido!')
      } else if (letra === estaLista(letra)) {
         alert('valor já adicionada!')
      } else {
         letrasDigitadas.push(letra);
         historico.innerHTML += ' ' + letra;
         let confirmaErro = 0;

         for (const i in letraEmPalavras) {

            if (letra === letraEmPalavras[i]) {
               let caixaLetra = document.querySelectorAll('.letras');
               caixaLetra[i].innerText = letra;
               acertos++
                             
               if (acertos === letraEmPalavras.length) {
                  alert('Parabéns você ganhou!')
                  setTimeout(() => {
                     alert('Iniciando novo jogo....')
                     location.reload();
                  }, 1500);
               }

            } else {
               confirmaErro++               
               if (confirmaErro === letraEmPalavras.length) {
                  erros--
                  vida[erros].style.display = 'none';
                  if (erros === 0) {
                     alert('Você perdeu!')
                     setTimeout(()=>{
                        location.reload();
                     }, 1500)  
                  }
               }
            }              
         }
      }

   });
      function estaLista (l) {
         for (const i of letrasDigitadas) {
            if (l === i) {
               return l
            }
         }
      }
});
   


