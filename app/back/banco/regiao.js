class Regiao{
    constructor(connection){
        this._con = connection;
    }

      /**
     * cria novo usuário por meio da query insert
     * @param Regiao - dados do Regiao
     * @param callback - função de retorno 
     */

    findAll(callback){
        try{
            this._con.query('SELECT * FROM estado', callback);
            console.log("testando2")
        } catch(error){
            console.log(error);
            console.log("testando erro")
        }
    }
}
    module.exports = function(){
       
        return Regiao;
       
    }
