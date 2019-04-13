
  
  /**
   *  insere as configurações do custom-express, que tem: express e consign
   *         O consign integra os controllers, em um primeiro momento.
   */
  var config = require('./custon-express');
  
  /**
   *  cria uma instância do config dentro do app, assim permite criar a aplicação com o listener 
   *  e deixar a aplicação escutando a porta 3000
   */
  var app = config();
  
  app.listen(3000, function(){
      console.log('escutando a porta 3000');
  })