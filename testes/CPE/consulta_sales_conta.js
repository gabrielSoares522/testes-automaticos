const axios = require('axios')

function gerarDominio(dominio,documento,email,versao) {
    
    if(documento == "CNPJ"){
        return dominio +"/services/data/"+versao+"/query?q=SELECT+id,name,phone,FC_email_PJ__c,companyManager__c+from+Account+where+FC_email_PJ__c+=+%27"+email+"%27"
    }else{
        return dominio +"/services/data/"+versao+"/query?q=SELECT+id,name,phone,FC_Email_pessoal_pc__c+from+Account+where+FC_Email_pessoal_pc__c+=+%27"+email+"%27"
    }
    
}
const TOKEN = "Bearer 00DDn00000C16rS!ARgAQPhIcfxaLvVa1_GTovAwxffh40YwIXAN5hkLUWm2Iw3L_LFTTF9CsV4K25GpzwO73hEltwdKNDIoHgHtlSrQEOWinm0N"

const DOMINIO = "https://izysoftsoluction-dev-ed.develop.my.salesforce.com"
const DOCUMENTO = "CPF"
const EMAIL = "diego.silva@gmail.com"
const VERSAO = "v56.0"
const ENDPOINT = gerarDominio(DOMINIO,DOCUMENTO,EMAIL,VERSAO)

function consultarSales(tokenAcesso, endpointConsulta){
    axios.get(endpointConsulta, {
        headers: {
            'Authorization': tokenAcesso,
            'content-type': 'text/json'
        }
    }).then(function (response) {
        console.log("status: "+ response.status)
        console.log("corpo: "+ JSON.stringify(response.data))
        
        let encontrado = verificaSeFoiEncontrado(JSON.stringify(response.data),response.status.toString())

        let dados = coletarDados(response.data, response.status.toString(),DOCUMENTO,encontrado.toString())

        console.log("encontrado: "+encontrado)
        console.log("dados: "+ JSON.stringify(dados))

    })
}

function verificaSeFoiEncontrado(resposta,status) {
    resposta = JSON.parse(resposta)

    if(status == "200")
    {
        if(resposta.records.length > 0){
            return true
        }
    }
    return false
}

function coletarDados(resposta, status, documento,encontrado) {
    if(status == "200" && encontrado == "true"){
        resposta = JSON.parse(resposta)
        let dados = resposta.records[0]
        if(documento == "CPF"){
            return {
                "id":dados.Id,
                "nomeCompleto": dados.Name,
                "email": dados.FC_email_PJ__c,
                "telefone": dados.Phone,
                "CPF": dados.Document__c
            }
        }

        if(documento == "CPNJ"){
            return {
                "id":dados.Id,
                "nomeCompleto": "none",
                "email": dados.FC_Email_pessoal_pc__c,
                "telefone": dados.Phone,
                "CNPJ": dados.Document__c,
                "nomeEmpresa": dados.Company__c,
                "nomeResponsavel": dados.Name
            }
        }
    }
}

consultarSales(TOKEN,ENDPOINT)
