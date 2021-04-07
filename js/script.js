window.addEventListener('load', () => {
  atualizar();
  
});
// total de imagem dentro do quadro é 151 | cada imagem possui 151 h x 120,794702 L
const img = document.querySelector('#car');
const carWidth = 120; // Largura total 18240
const carHeight = 151; // Altura 151
const coluna = 151;
const linha = 1;

var atualizador ;
var pos = 0;

// funçao recebe os parametros, atualizando onde deve começar e terminar
function updateFrame(inicio){
  const x = inicio;

  if(atualizador == pos){ 
     pos = ++pos;  
        console.log("valor do pos antes de " + pos);     
                
    }else if(pos == x) {   
         clearInterval (intervalo); 
      }else {
          var coluna = atualizador * carWidth ;
          img.style.marginLeft = -coluna + 'px'; // anda apenas na coluna 
        }
        //console.log("valor do pos " + pos);
  }
              
    
function desenhar(){   
       
 }
 // 
 var intervalo = setInterval(function(){
  atualizar();
  },200);

 function atualizar(){
   desenhar();
  }

  // Função pega posição inicial que o carro esta na direita ate o final antes de mudar de posição 
  function moveRight(){ 
    for(var i = 78; i<=104; i++){
      atualizador = i;
      updateFrame(i);
      
   console.log("valor do for " + i);
   
    }
    initMap(-23.962782,-46.278824)
  }
  
  // Função pega apenas a posição inicial da esquerda ate a final da esquerda
  function moveLeft(){
    for(var i = 20; i<=50; i++){
      atualizador = i;
      updateFrame(i);
      
   console.log("valor do for " + i);
    }
  
  initMap(-23.962701,-46.276151);
  }

  // função movimento para cima
  function moveUp(){
    for(var i = 1; i<=10; i++){
      atualizador = i;
      updateFrame(i);
   console.log("valor do for " + i);
    }
    initMap(-23.962278,-46.273007);
  }
// função movimento para baixo
  function moveDonw(){
    for(var i = 50; i<=75; i++){
      atualizador = i;
      updateFrame(i);
      
      console.log("valor do for " + i);
    }
    initMap(-19.92818,-43.95562);
  }
  
 // funçao que faz a integraçao com google maps
  function initMap(x,y) {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: {lat:x, lng:y},
      zoom: 16
    });
   
  }

 