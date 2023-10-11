const axios = require('axios')

function gerarDominio(dominio,documento,email,versao,accountId) {
    
    if(documento == "CNPJ"){
        return dominio +"/services/data/"+versao+"/query?q=SELECT+id,name,phone,email+from+Contact+where+email+=+%27"+email+"%27+And+AccountId+=+%27"+accountId+"%27"
    }
    
}
const TOKEN = "Bearer 00DDn00000C16rS!ARgAQPhIcfxaLvVa1_GTovAwxffh40YwIXAN5hkLUWm2Iw3L_LFTTF9CsV4K25GpzwO73hEltwdKNDIoHgHtlSrQEOWinm0N"

const DOMINIO = "https://izysoftsoluction-dev-ed.develop.my.salesforce.com"
const DOCUMENTO = "CNPJ"
const EMAIL = "diego.silva@gmail.com"
const VERSAO = "v56.0"
const ACCOUNT_ID = ""
const ENDPOINT = gerarDominio(DOMINIO,DOCUMENTO,EMAIL,VERSAO,ACCOUNT_ID)


function consultarSales(tokenAcesso, endpointConsulta){
    axios.get(endpointConsulta, {
        headers: {
            'Authorization': tokenAcesso,
            'content-type': 'text/json'
        }
    }).then(function (response) {
        console.log("status: "+ response.status)
        console.log("corpo: "+ JSON.stringify(response.data))
    })
}


let dados
consultarSales(TOKEN,ENDPOINT)

console.log("dados: " +JSON.stringify(dados))
