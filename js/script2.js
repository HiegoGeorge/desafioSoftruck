//const img = document.querySelector('#car');
var tID; // usaremos esta variável para limpar o setInterval ()
function stopAnimate () {
clearInterval (tID); 
} // fim de stopAnimate ()

function animateScript () {
  var posição = 256; // posição inicial para o divisor de imagem 
const intervalo = 100; // 100 ms de intervalo para setInterval () 
const diff = 256;      // diff como uma variável para deslocamento de posição
tID = setInterval (() => {
document.getElementById ("car"). style.backgroundPosition = 
'_ $ {position} px 0px'; 
// usamos o literal de modelo ES6 para inserir a variável "posição"
if (posição <1536) 
{posição = posição + diff } 
// incrementamos a posição em 256 cada vez, 
else 
{posição = 256 } 
// redefine a posição para 256px, quando a posição exceder 1536px
}, intervalo); // fim de setInterval
} // fim do animateScript ()