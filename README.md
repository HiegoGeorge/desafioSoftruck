# desafioSoftruck

O código foi dividido em duas pastas

Dentro de uma pasta principal, foi subdividido o projeto no no front-end e back-end, desta maneira ficaria mais fácil para realizar a manutenção do código. 

Dentro do front-end foi usando scripts para integrar o google maps e realizar a movimentação do carrinho conforme a Sprite anexada.
E também poder estilizar a página deixando visivelmente acessível para o usuário com melhor entendimento.

Dentro do back-end foi realizado manipulação do arquvo.json e salvar em outro arquivo apenas o seria preciso para movimentar o carrinho e sua localização.
Nesse caso os dados foram extraídos e passado manualmente para o script de movimentação do carrinho.

Foi utilizado javaScript e NodeJs para resolver o teste, a escolha dessas linguagens foi pelo motivo que o usuário não precisa baixar nada a mais para executar o projeto,
o mesmo pode apenas clicar no index.html é abrir na página web e testar, por ser uma linguagem web também ficaria mais fácil fazer algumas alterações visuais e de elementos gráficos.

Dentro da pasta front-end tem uma pasta chamada "js" a mesma possui dois scripts. O que chama “script.js” ele faz toda a lógica de movimentação da animação com intervalo de tempo 
já definido, onde passado por parâmetro a posição inicial que o carro fica para cima ate a final que ele continua para cima, assim foi feito para as outras posições.
Já no outro script “scripMap.js” é o que faz a integração com o google maps passando os parâmetros para o html gerar a localização conforme a movimentação do carrinho. 
Tem a pasta css que dentro dela tem o arquivo que faz a estilização da página deixando visualmente legível para o usuário. 
Por último a pasta que contém os arquivos de imagens chamado “img”, toda imagem do projeto fica dentro dela.

Dentro da pasta back-end onde foi utilizado o NodeJs para extrair os dados que precisávamos para gerar os dados geográficos.
