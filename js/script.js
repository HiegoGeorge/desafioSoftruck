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
          
  }
  console.log("valor do pos " + pos);   
      
      
    
function desenhar(){  
   
       
 }
 var limpa = setInterval(function(){
  atualizar();
  },200);

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
      //testeMap();
   console.log("valor do for " + i);
    }
  }

  
 