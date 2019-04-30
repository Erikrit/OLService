class Categoria{
    constructor(connection){
        this._con = connection;
    }

      /**
     * cria novo usuário por meio da query insert
     * @param categoria - dados do Regiao
     * @param callback - função de retorno 
     * 
     *  **/
    
     findAllCategoriaId(id,callback){
       try{
        this._con.query('select *from subCategoria where idCategoria = ?', id, callback);
       
    } catch(error){
        console.log(error);
    }
}


findAllCagoria(callback){
    try{
        this._con.query('SELECT * FROM categoria', callback);
       
    } catch(error){
        console.log(error);
    }
}
}
    module.exports = function(){
       
        return Categoria;
       
    }
