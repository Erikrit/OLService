

module.exports = function(app){
 

app.get('/OLService', function(req, resp){


        var con = app.banco.connectionFactory;
        var dao = new app.banco.regiao(con);
      
        dao.findAllEstados(function(exception, result){
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
        
            
            const validacao = require('../validarDados/validar');
            var valida = validacao.validar(result);
            
            var json = validacao.transformarJson(valida);
          
            resp.status(200);
            resp.send(json);

        });
    });

    app.get('/OLService/codigoEstado/:id',function(req,resp){
        data = req.params;
        var con = app.banco.connectionFactory;
        var dao = new app.banco.regiao(con);
        dao.findAllEstadoId(data.id, function(exception, result){
           
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
        
            
            const validacao = require('../validarDados/validar');
            var valida = validacao.validar(result);
            
            var json = validacao.transformarJson(valida);
            console.log(json);
            resp.status(200);
            resp.send(json);

        });
    });
    app.get('/OLService/subCategoria/:id',function(req,resp){
        data = req.params;
        var con = app.banco.connectionFactory;
        var dao = new app.banco.categoria(con);
        dao.findAllCategoriaId(data.id, function(exception, result){
           
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
        
            
            const validacao = require('../validarDados/validar');
            var valida = validacao.validar(result);
            
            var json = validacao.transformarJson(valida);
            console.log(json);
            resp.status(200);
            resp.send(json);

        });
    });

    
app.get('/OLService/categoria', function(req, resp){


    var con = app.banco.connectionFactory;
    var dao = new app.banco.categoria(con);
  
    dao.findAllCagoria(function(exception, result){
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
    
        
        const validacao = require('../validarDados/validar');
        var valida = validacao.validar(result);
        
        var json = validacao.transformarJson(valida);
      
        resp.status(200);
        resp.send(json);

    });
});
    
    
    
}
