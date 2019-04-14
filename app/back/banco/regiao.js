class Regiao{
    constructor(connection){
        this._con = connection;
    }

      /**
     * cria novo usuário por meio da query insert
     * @param Regiao - dados do Regiao
     * @param callback - função de retorno 
     */

    findAllEstados(callback){
        try{
            this._con.query('SELECT * FROM estado', callback);
           
        } catch(error){
            console.log(error);
        }
    }

findAllEstadoId(id,callback){
    try{
        this._con.query('select *from cidade where cidade.estado = ?', id, callback);
       
    } catch(error){
        console.log(error);
    }
}

}

    module.exports = function(){
       
        return Regiao;
       
    }
