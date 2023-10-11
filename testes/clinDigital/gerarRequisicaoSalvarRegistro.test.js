function run(dia, contactIdentity, tipoUsuario, canal,  titularRequestResponse,ticket,pesquisas) {
    let registroID = gerarGuid()
    

    let idUsuario = 0
    let idTipo = 0
    let idOrigem = 0
    let comentario = ""
    
    let tipoRegistroDescricao = ""
    let nomeOperador = ""

    let cpfUsuario = ""
    let nomeUsuario = ""
    let dataNascimento = ""
    let telefoneUsuario = ""
    let enderecoUsuario = ""

    let idade = 0
    if(canal.toLowerCase() == "whatsapp"){
        telefoneUsuario = contactIdentity.split("@")[0]
    }

    try{
        titularRequestResponse = JSON.parse(titularRequestResponse)
        if(titularRequestResponse.length>0){
            let titular = titularRequestResponse[0]
            cpfUsuario = titular.cpf
            nomeUsuario = titular.nome
        
            dataNascimento = converterFormatoData(titular.dataNascimento)
            idade = retornarIdade(dataNascimento+"T00:00:00.000Z")
            enderecoUsuario = titular.tipoLogradouroNome + " " + titular.logradouro + " " + titular.numero + " " + titular.complemento + " " + titular.bairroNome + " " + titular.municipioNome + " " + titular.ufNome + " " + titular.cep
    
            idUsuario = titular.id
            idTipo = parseInt(titular.contrato)
            idOrigem = parseInt(titular.codigoOrigemVenda)

            tipoRegistroDescricao = titular.contrato
            nomeOperador = titular.nomeFuncionarioCadastro
            comentario = titular.observacao
        }
    }catch(e){}

    let requisicao = {
        "id": registroID,
        "dataRegistro": dia,
        "botId": "planclin",
        "canal": canal,
        "userIdentity": contactIdentity,
        "tipoUsuario": tipoUsuario,
        "nomeUsuario":nomeUsuario,
        "idade": idade,
        "dataNascimento": dataNascimento,
        "cpfUsuario": cpfUsuario,
        "houveAH": true,
        "ticket": "",
        "jaTRatado": true,
        "cliente": idUsuario,
        "tipo": idTipo,
        "origem": idOrigem,
        "telefoneUsuario": telefoneUsuario,
        "comentario": comentario,
        "pergunta1": "",
        "resposta1": "",
        "motivo1": "",
        "pergunta2": "",
        "resposta2": "",
        "motivo2": "",
        "pergunta3": "",
        "resposta3": "",
        "motivo3": "",
        "enderecoUsuario": enderecoUsuario,
        "enderecoOutro": "",
        "tipoRegistroDescricao": tipoRegistroDescricao,
        "operador": nomeOperador,
        "pesquisas": []
    }
    
    if(ticket != null && ticket != undefined && ticket != ""){
        requisicao.houveAH = true
        requisicao.ticket = ticket
    }else{
        requisicao.houveAH = false
        requisicao.ticket = ""
    }

    try{
        pesquisas = JSON.parse(pesquisas)
        pesquisas.forEach((pesquisa,indicePesquisa) => {
            let pesquisaID = gerarGuid()

            requisicao.pesquisas.push({ "id": pesquisaID, "descricao": pesquisa.descricao, "itens": [] })

            pesquisa.itens.forEach((item,indiceItem) => {
                let itemID = gerarGuid()
                if(indicePesquisa == 0 && indiceItem == 0){
                    requisicao.pergunta1 = item.questao
                    requisicao.resposta1 = item.resposta
                    requisicao.motivo1 = item.motivo
                } else if(indicePesquisa == 0 && indiceItem == 1){
                    requisicao.pergunta2 = item.questao
                    requisicao.resposta2 = item.resposta
                    requisicao.motivo2 = item.motivo
                } else if(indicePesquisa == 0 && indiceItem == 2){
                    requisicao.pergunta3 = item.questao
                    requisicao.resposta3 = item.resposta
                    requisicao.motivo3 = item.motivo
                }
                requisicao.pesquisas[requisicao.pesquisas.length-1].itens.push({
                    "id": itemID,
                    "questao": item.questao,
                    "resposta": item.resposta,
                    "motivo": item.motivo
                })
                
            })
        })
    }catch(e){ }
    return JSON.stringify(requisicao)
}

function retornarIdade(dataNascimento){
    let dataNascimentoFormatada = new Date(dataNascimento)
    let dataAtual = new Date()
    
    let idade = dataAtual.getFullYear() - dataNascimentoFormatada.getFullYear()
    let mes = dataAtual.getMonth() - dataNascimentoFormatada.getMonth()
    if (mes < 0 || (mes === 0 && dataAtual.getDate() < dataNascimentoFormatada.getDate())) {
        idade--
    }
    return idade
}
function converterFormatoData(data){
    if(data.includes("/") == true){
        let dados = data.split("/")
        return `${dados[2]}-${dados[1]}-${dados[0]}`
    }else{
        return data
    }
}
  
function gerarGuid() {
    return "{{$guid}}"
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
function gerarGuidTeste() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

describe("Teste de gerarGuid", () => {
    test("Teste 1",()=>{
        let resultado = gerarGuidTeste()
        expect(resultado.length).toBe(36)
    })
})

describe("teste de converterFormatoData", () => {
    test("Teste 1",()=>{
        expect(converterFormatoData("31/05/1999")).toBe("1999-05-31")
    })
})

describe("teste de retornarIdade", () => {
    test("Teste 1",()=>{
        expect(retornarIdade("1999-05-31T11:07:17.088Z")).toBe(24)
    })
    test("Teste 2",()=>{
        expect(retornarIdade("1999-05-31")).toBe(24)
    })
})

describe("Teste de gerarRequisicaoSalvarRegistro", () => {
    test("Teste 1",()=>{
        let dia = "2023-08-17T11:07:17.088Z"
        let contactIdentity = "5513998070619@wa.gw.msging.net"
        let tipoUsuario = "Dentista"
        let canal = "WhatsApp"
        
        let titularRequestResponse = require("./dadosS4EAPI.json")
        let ticket = require("./dadosTicket.json")
        let pesquisas = require("./dadosPesquisa.json")
        
        expect(run(dia, 
            contactIdentity, 
            tipoUsuario, 
            canal,
            JSON.stringify(titularRequestResponse),
            JSON.stringify(ticket),
            JSON.stringify(pesquisas))).toBe(JSON.stringify({
                "id": "{{$guid}}",
                "dataRegistro": "2023-08-17T11:07:17.088Z",
                "botId": "planclin",
                "canal": "WhatsApp",
                "userIdentity": "5513998070619@wa.gw.msging.net",
                "tipoUsuario": "Dentista",
                "nomeUsuario": "PEDRO IVO PIRES NASCIMENTO",
                "idade": 41,
                "dataNascimento": "1982-04-12",
                "cpfUsuario": "05471339444",
                "houveAH": true,
                "ticket": JSON.stringify({'id':'a', 'sequentialId':49, 'ownerIdentity':'testandobot9@msging.net','customerIdentity':'f2cd3c53-ba02-4149-b45c-b5173b169293.testandobot9@0mn.io', 'customerDomain':'0mn.io', 'provider':'Lime','status':'ClosedAttendant', 'storageDate':'2023-08-17T15:07:26.810Z', 'closeDate':'2023-08-17T15:07:41.666Z', 'statusDate':'2023-08-17T15:07:41.666Z', 'externalId':'a', 'rating':0, 'team':'Default','unreadMessages':0, 'closed':true, 'closedBy':'gabriel.soares%40izysoft.com.br@blip.ai', 'tags':['adc'],'priority':0}),
                "jaTRatado": true,
                "cliente": 301212467,
                "tipo": 2597,
                "origem": -1,
                "telefoneUsuario": "5513998070619",
                "comentario": "",
                "pergunta1": "questao 1",
                "resposta1": "resposta 1",
                "motivo1": "motivo 1",
                "pergunta2": "",
                "resposta2": "",
                "motivo2": "",
                "pergunta3": "",
                "resposta3": "",
                "motivo3": "",
                "enderecoUsuario": "Rua SESSENTA E CINCO 301 QUA 17 RIO DOCE OLINDA PERNAMBUCO 53080810",
                "enderecoOutro": "",
                "tipoRegistroDescricao": "2597",
                "operador": "",
                "pesquisas": [
                    {
                        "id": "{{$guid}}",
                        "descricao": "Pesquisa Satisfação",
                        "itens": [
                            {
                                "id": "{{$guid}}",
                                "questao": "questao 1",
                                "resposta": "resposta 1",
                                "motivo": "motivo 1"
                            }
                        ]
                    }
                ]
            }))
    })

    test("Teste 2",()=>{
        let dia = "2023-08-17T11:07:17.088Z"
        let contactIdentity = "5513998070619@wa.gw.msging.net"
        let tipoUsuario = "Dentista"
        let canal = "WhatsApp"
        
        let titularRequestResponse = require("./dadosS4EAPI.json")
        let ticket = undefined
        let pesquisas = require("./dadosPesquisa.json")
        
        expect(run(dia, 
            contactIdentity, 
            tipoUsuario, 
            canal,
            JSON.stringify(titularRequestResponse),
            JSON.stringify(ticket),
            JSON.stringify(pesquisas))).toBe(JSON.stringify({
                "id": "{{$guid}}",
                "dataRegistro": "2023-08-17T11:07:17.088Z",
                "botId": "planclin",
                "canal": "WhatsApp",
                "userIdentity": "5513998070619@wa.gw.msging.net",
                "tipoUsuario": "Dentista",
                "nomeUsuario": "PEDRO IVO PIRES NASCIMENTO",
                "idade": 41,
                "dataNascimento": "1982-04-12",
                "cpfUsuario": "05471339444",
                "houveAH": false,
                "ticket": "",
                "jaTRatado": true,
                "cliente": 301212467,
                "tipo": 2597,
                "origem": -1,
                "telefoneUsuario": "5513998070619",
                "comentario": "",
                "pergunta1": "questao 1",
                "resposta1": "resposta 1",
                "motivo1": "motivo 1",
                "pergunta2": "",
                "resposta2": "",
                "motivo2": "",
                "pergunta3": "",
                "resposta3": "",
                "motivo3": "",
                "enderecoUsuario": "Rua SESSENTA E CINCO 301 QUA 17 RIO DOCE OLINDA PERNAMBUCO 53080810",
                "enderecoOutro": "",
                "tipoRegistroDescricao": "2597",
                "operador": "",
                "pesquisas": [
                    {
                        "id": "{{$guid}}",
                        "descricao": "Pesquisa Satisfação",
                        "itens": [
                            {
                                "id": "{{$guid}}",
                                "questao": "questao 1",
                                "resposta": "resposta 1",
                                "motivo": "motivo 1"
                            }
                        ]
                    }
                ]
            }))
    })

    test("Teste 3",()=>{
        let dia = "2023-08-17T11:07:17.088Z"
        let contactIdentity = "5513998070619@wa.gw.msging.net"
        let tipoUsuario = "Dentista"
        let canal = "WhatsApp"
        
        let titularRequestResponse = require("./dadosS4EAPI.json")
        let ticket = require("./dadosTicket.json")
        let pesquisas = undefined
        
        expect(run(dia, 
            contactIdentity, 
            tipoUsuario, 
            canal,
            JSON.stringify(titularRequestResponse),
            JSON.stringify(ticket),
            JSON.stringify(pesquisas))).toBe(JSON.stringify({
                "id": "{{$guid}}",
                "dataRegistro": "2023-08-17T11:07:17.088Z",
                "botId": "planclin",
                "canal": "WhatsApp",
                "userIdentity": "5513998070619@wa.gw.msging.net",
                "tipoUsuario": "Dentista",
                "nomeUsuario": "PEDRO IVO PIRES NASCIMENTO",
                "idade": 41,
                "dataNascimento": "1982-04-12",
                "cpfUsuario": "05471339444",
                "houveAH": true,
                "ticket": JSON.stringify({'id':'a', 'sequentialId':49, 'ownerIdentity':'testandobot9@msging.net','customerIdentity':'f2cd3c53-ba02-4149-b45c-b5173b169293.testandobot9@0mn.io', 'customerDomain':'0mn.io', 'provider':'Lime','status':'ClosedAttendant', 'storageDate':'2023-08-17T15:07:26.810Z', 'closeDate':'2023-08-17T15:07:41.666Z', 'statusDate':'2023-08-17T15:07:41.666Z', 'externalId':'a', 'rating':0, 'team':'Default','unreadMessages':0, 'closed':true, 'closedBy':'gabriel.soares%40izysoft.com.br@blip.ai', 'tags':['adc'],'priority':0}),
                "jaTRatado": true,
                "cliente": 301212467,
                "tipo": 2597,
                "origem": -1,
                "telefoneUsuario": "5513998070619",
                "comentario": "",
                "pergunta1": "",
                "resposta1": "",
                "motivo1": "",
                "pergunta2": "",
                "resposta2": "",
                "motivo2": "",
                "pergunta3": "",
                "resposta3": "",
                "motivo3": "",
                "enderecoUsuario": "Rua SESSENTA E CINCO 301 QUA 17 RIO DOCE OLINDA PERNAMBUCO 53080810",
                "enderecoOutro": "",
                "tipoRegistroDescricao": "2597",
                "operador": "",
                "pesquisas": []
            }))
    })

    test("Teste 4",()=>{
        let dia = "2023-08-17T11:07:17.088Z"
        let contactIdentity = "5513998070619@wa.gw.msging.net"
        let tipoUsuario = "Dentista"
        let canal = "WhatsApp"
        
        let titularRequestResponse = undefined
        let ticket = require("./dadosTicket.json")
        let pesquisas = require("./dadosPesquisa.json")
        
        expect(run(dia, 
            contactIdentity, 
            tipoUsuario, 
            canal,
            JSON.stringify(titularRequestResponse),
            JSON.stringify(ticket),
            JSON.stringify(pesquisas))).toBe(JSON.stringify({
                "id": "{{$guid}}",
                "dataRegistro": "2023-08-17T11:07:17.088Z",
                "botId": "planclin",
                "canal": "WhatsApp",
                "userIdentity": "5513998070619@wa.gw.msging.net",
                "tipoUsuario": "Dentista",
                "nomeUsuario": "",
                "idade": 0,
                "dataNascimento": "",
                "cpfUsuario": "",
                "houveAH": true,
                "ticket": JSON.stringify({'id':'a', 'sequentialId':49, 'ownerIdentity':'testandobot9@msging.net','customerIdentity':'f2cd3c53-ba02-4149-b45c-b5173b169293.testandobot9@0mn.io', 'customerDomain':'0mn.io', 'provider':'Lime','status':'ClosedAttendant', 'storageDate':'2023-08-17T15:07:26.810Z', 'closeDate':'2023-08-17T15:07:41.666Z', 'statusDate':'2023-08-17T15:07:41.666Z', 'externalId':'a', 'rating':0, 'team':'Default','unreadMessages':0, 'closed':true, 'closedBy':'gabriel.soares%40izysoft.com.br@blip.ai', 'tags':['adc'],'priority':0}),
                "jaTRatado": true,
                "cliente": 0,
                "tipo": 0,
                "origem": 0,
                "telefoneUsuario": "5513998070619",
                "comentario": "",
                "pergunta1": "questao 1",
                "resposta1": "resposta 1",
                "motivo1": "motivo 1",
                "pergunta2": "",
                "resposta2": "",
                "motivo2": "",
                "pergunta3": "",
                "resposta3": "",
                "motivo3": "",
                "enderecoUsuario": "",
                "enderecoOutro": "",
                "tipoRegistroDescricao": "",
                "operador": "",
                "pesquisas": [
                    {
                        "id": "{{$guid}}",
                        "descricao": "Pesquisa Satisfação",
                        "itens": [
                            {
                                "id": "{{$guid}}",
                                "questao": "questao 1",
                                "resposta": "resposta 1",
                                "motivo": "motivo 1"
                            }
                        ]
                    }
                ]
            }))
    })
})