module.exports = {

    validar(data){
       
        var jsonData;
        data.forEach(element => {
            jsonData = JSON.stringify(data)
        });

        return jsonData;
    },

    transformarJson(data){
        var trasf = JSON.parse(data);
        return trasf;
    }

    

}