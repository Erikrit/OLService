
module.exports = function(app){
 

app.get('/OLService', function(req, resp){


        var con = app.banco.connectionFactory;
        var dao = new app.banco.regiao(con);
      
        dao.findAll(function(exception, result){
            if(exception){
                resp.status(500);
                resp.send({"message":"Error inesperado"});
                return;
            }

            if(result.length == 0){
                resp.status(404);
                resp.send({"message":"pergunta  não encontrada !!"});
                return;
            }
            

            /**
             * exceção genérica
             */
            if(exception){
                resp.status(500);
                resp.send({"mensagem":"erro ao buscar pergunta !!"});
                console.log(exception);
                return;
            }


            

            resp.status(200);
            resp.send(result);
        });
    });

}
