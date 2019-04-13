class ValidarDados {

    constructor(){

    }
    
    voltarJson(data){
        for(var i=0; i < data.length; i++){
            data[i] = JSON.parse(data[i]); 
        } 
  return data;
      }
}
