var RandExp = require('randexp');
function gerarAPIKEY(){
    return new RandExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/).gen();

}
console.log(gerarAPIKEY());