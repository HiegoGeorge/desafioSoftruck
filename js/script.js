window.addEventListener('load', () => {
  atualizar();
  
});

// total de imagem dentro do quadro é 151 | cada imagem possui 151 h x 120,794702 L
const img = document.querySelector('#car');
const carWidth = 120; // Largura total 18240
const carHeight = 151; // Altura 151
const coluna = 151;
const linha = 1;
//Coulna 12480 
//linha 3020
var atualizador ;
var pos = 0;


function updateFrame(inicio){
  const x = inicio;
  if(atualizador == pos){
     pos = ++pos;  
        console.log("valor do pos antes de " + pos);     
          
      
    }else if(pos == x) {   
         clearInterval (limpa); 
      }else {
          var coluna = atualizador * carWidth ;
          img.style.marginLeft = -coluna + 'px'; // anda apenas na coluna 
        }
        console.log("valor do pos " + pos);     
        
      }
      
    
function desenhar(){  
   
       
 }
 var limpa = setInterval(function(){
  atualizar();
  },100);

 function atualizar(){
   desenhar();
  }



  function moveRight(){
    for(var i = 78; i<=104; i++){
      atualizador = i;
      updateFrame(i);
   console.log("valor do for " + i);
    }
  }
  
  function moveLeft(){
    for(var i = 20; i<=50; i++){
      atualizador = i;
      updateFrame(i);
   console.log("valor do for " + i);
    }
  }

  function moveUp(){
    for(var i = 1; i<=10; i++){
      atualizador = i;
      updateFrame(i);
   console.log("valor do for " + i);
    }
  }

  function moveDonw(){
    for(var i = 50; i<=75; i++){
      atualizador = i;
      updateFrame(i);
   console.log("valor do for " + i);
    }
  }

 









  
  /*
 function moverEsquerda(){
    //esquerda = true;
       for(var i = 20; i<=50; i++){
        updateFrame(i,i);
       console.log("valor do for " + i);

      }
    
  }

  function moverDireita(){
   // direita = true;
    for(let i = 78; i<=105; i++){
      updateFrame(i);
     console.log("valor do for " + i);
  }
}




  function moverCima(){
    cima = true;
  }
  function moverBaixo(){
    baixo = true;
  }
 */

 /* function stopAnimate () {
    clearInterval (limpa); 
    } // fim de stopAnimate ()
*/
/*
function prox() { 
    pos = ++pos;
    console.log(pos);
    //pos =104  coluna == 12480 
    //coluna = coluna = 12480;
  if (pos != 0) {
    pos =0;
    var linha = Math.floor(pos / 5) * carHeight;
    var coluna = pos * carWidth ;
    img.style.marginTop = linha ; // anda apenas na linha
    img.style.marginLeft = -coluna + 'px'; // anda apenas na coluna 
      
    console.log("Entrou no if" + pos);
    
  }else if(coluna == 480) {
    img.style.marginTop = linha ; // anda apenas na linha
    img.style.marginLeft = -coluna + 'px'; // anda apenas na coluna 
  
   console.log("Entrou no else " + coluna); 
    //console.log("linha " + linha); 
  }
 // Coulna = 12480;

}

setInterval(function(){
  prox();
},100);

*/


