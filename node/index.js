import { promises as fs } from "fs";
// utilizando promises para evitar callBacks hell
init();
var vetor = [];

async function init(){
    try{  // Json.parse converte no formato json para que nao fique no formato de bytes, manipular os dados facilmente
      const data = JSON.parse(await fs.readFile("frontend_data_gps.json"));

        // preencher vetor com os dados de lat/log e speed
      data[0].gps.forEach(termos => {
        vetor.push(termos.latitude);
        vetor.push(termos.longitude);        
        vetor.push(termos.speed);
      });

  //  vetor.sort((a,b) => b.speed - a.speed));
    console.log(vetor);
    await salvarDados(); // chamando a funçao 

    }catch(err){
      console.log(err);

    }

}

// salvando um arquivo em formato Json com os dados do vetor lido
async function salvarDados(){
  await fs.writeFile("DadosGps.json",JSON.stringify(vetor, null, 2) );
}
