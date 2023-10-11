const axios = require('axios')
const { v4: uuidv4 } = require('uuid')

const subbots_key = [
{
    "key":"Key c2RyMTg6bDViM2cwZHRBTXJEaDc2MThQYWs=",
    "flow_identifier": "dc582d89-a8f1-4f04-9f86-f4e3356c283d"
},
{
    "key": "Key ZmluYW5jZWlybzIwNjpXOWVSZnpEYkZLbTBCTGxydllHRQ==",
    "flow_identifier": "2f70f20b-3548-4ebe-a8d7-4c79b6f06dd5"
},
{
    "key": "Key Y3Vyc29zMTA6MklsZjcxZXIzZk51dlliWUhSVms=",
    "flow_identifier": "ac5765fa-13e2-428f-a96f-b7a501a082d2"
},
{
    "key": "Key Y2VudHJhbGRlcmVsYWNpb25hbWVudG8xMTpCckUwTUVLRVZqY0hWdFpsVFBWVw==",
    "flow_identifier": "89d470c6-6108-42df-bb0a-ac9170923e9c"
},
{
    "key": "Key YXNzaXN0ZW5jaWF0ZWNuaWNhMjI6bTNNUWNEWno4SFo1MjNsUWpmVjg=",
    "flow_identifier": "8ff9921e-9f18-40f2-a34d-a50de5163325"
},
{
    "key": "Key c3Vwb3J0ZXRlY25pY28zOTo2UERJZnlzVnhLaW01VDhDeHVMVg==",
    "flow_identifier": "cdd5badd-957f-401e-a484-97d91240ce21"
}
]

const endpoint = "https://cpetecnologia.http.msging.net/commands"
/*
subbots_key.forEach(async fluxo => {
    await buscarContatos(fluxo.key,fluxo.flow_identifier)
});*/
async function buscarContatosRoteador(KEY){
    console.log("rotearor: "+KEY)

    await axios.post(endpoint, {
        "id": uuidv4(),
        "to": "postmaster@crm.msging.net",
        "method": "get",
        "uri": "/contacts?$skip=0"
    }, {
        headers: {
        'Authorization': KEY,
        'content-type': 'text/json'
        }
    }).then(function (response) {
        response.data.resource.items.forEach(contato => {
            console.log("contato: "+contato.name)
            console.log("- "+contato.identity)
            subbots_key.forEach(subbot => {
                
            resetarFluxo(contato.identity,KEY,subbot.flow_identifier)
            });
        });
    })
}

async function resetarTodosOsContatosContatos(KEY,flow_identifier){
    console.log("subbot: "+KEY)

    await axios.post(endpoint, {
        "id": uuidv4(),
        "to": "postmaster@crm.msging.net",
        "method": "get",
        "uri": "/contacts?$skip=0"
    }, {
        headers: {
        'Authorization': KEY,
        'content-type': 'text/json'
        }
    }).then(function (response) {
        response.data.resource.items.forEach(contato => {
            console.log("contato: "+contato.name)
            console.log("- "+contato.identity)
            
            resetarFluxo(contato.identity,KEY,flow_identifier)
        });
    })
}

async function buscarContatos(KEY){
    console.log("subbot: "+KEY)

    await axios.post(endpoint, {
        "id": uuidv4(),
        "to": "postmaster@crm.msging.net",
        "method": "get",
        "uri": "/contacts?$skip=0"
    }, {
        headers: {
        'Authorization': KEY,
        'content-type': 'text/json'
        }
    }).then(function (response) {
        response.data.resource.items.forEach(contato => {
            console.log("contato: "+contato.name)
            console.log("- "+contato.identity)
            
        });
    })
}
function pegarContexto(identity,KEY){
    console.log("subbot: "+KEY)

    axios.post(endpoint, {
        "id": uuidv4(),
        "to": "postmaster@msging.net",
        "method": "get",
        "uri": "/contexts/"+identity
    }, {
        headers: {
        'Authorization': KEY,
        'content-type': 'aplication/json'
        }
    }).then(function (response) {
        console.log(response.data)
    })
}
async function resetarFluxo(identity,KEY,flow_identifier){
    await axios.post(endpoint, {
        "id": uuidv4(),
        "to": "postmaster@msging.net",
        "method": "delete",
        "uri": "/contexts/"+identity+"/stateid%40"+flow_identifier
    }, {
        headers: {
        'Authorization': KEY,
        'content-type': 'application/json'
        }
    }).then(function (response) {
        console.log(response.data)
    })
}

//Principal
let principal = "Key cHJpbmNpcGFsMzc2OmRqUUEya2JqOVMweVFVSUtzbm82"
let identity_principal = "5513998070619@wa.gw.msging.net"
//Roteador
let roteador = "Key Y3BldGVjbm9sb2dpYXJvdGVhZG9yOkJCRVVnUW1YM2V6cHhySFhraW9q"
let identity_roteador = "5513998070619@wa.gw.msging.net"
//buscarContatos(roteador)
let identificar_fluxo_estoque = "e631ea2c-7160-412f-a871-8bad756a7e09"
let identificar_fluxo_principal = "2275c1bd-d0f7-4573-99c8-04c28c465bbf"

//resetarFluxo(identity_principal,roteador,identificar_fluxo_estoque)
//let roteador = "Key Y3BldGVjbm9sb2dpYXJvdGVhZG9yOkJCRVVnUW1YM2V6cHhySFhraW9q"
//buscarContatosRoteador(roteador)
//pegarContexto(identity_principal,principal)
pegarContexto("5591992629084@wa.gw.msging.net",principal)
//buscarContatos(roteador)