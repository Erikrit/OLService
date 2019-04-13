var mysql = require('mysql');

function createDbConnection(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'OLService'
    });
};
module.exports = function(){
    return createDbConnection();

}