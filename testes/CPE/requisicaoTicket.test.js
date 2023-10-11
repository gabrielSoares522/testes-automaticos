/*function run(documento,nome,email,telefone,descricaoTicket,empresa,lead,assunto,fila,dados,origem,dadosContato) {
    lead = lead.toLowerCase()
    fila = fila.toLowerCase()
    if(lead =="sim"){
        return JSON.stringify({
            "SuppliedName": nome,
            "SuppliedEmail": email,
            "SuppliedPhone": telefone,
            "Status": "New",
            "Origin": "Whatsapp",
            "Description": descricaoTicket,
            "Subject": assunto,
            "RecordTypeId": "0125c000001MeLGAA0"
        })
    }else{
        documento = documento.toLowerCase()
        console.log(documento)
        if(fila == "sdr"){
            let hoje = nowUTC("-3")
            let vencimento = nowUTC("-3")
            vencimento.setDate(vencimento.getDate() + 1)
            
            if(documento == "cpf"){
                dados = JSON.parse(dados)
                return JSON.stringify({
                    "ActivityDate": vencimento.toISOString(),
                    "Description": descricaoTicket,
                    "IsReminderSet": true,
                    "Origem_do_Lead__c": origem,
                    "OwnerId": dados.idVendedor,
                    "Priority":"Normal",
                    "ReminderDateTime": hoje.toISOString(),
                    "Status":"Open",
                    "Subject":"Proprietário Lead",
                    "WhatId": dados.id
                })
            } else {
                
                dados = JSON.parse(dados)
                dadosContato = JSON.parse(dadosContato)
                return JSON.stringify({
                    "ActivityDate": vencimento.toISOString(),
                    "Description": descricaoTicket,
                    "IsReminderSet": true,
                    "Origem_do_Lead__c": origem,
                    "Empresa__c": empresa,
                    "OwnerId": dados.idVendedor,
                    "Priority":"Normal",
                    "ReminderDateTime": hoje.toISOString(),
                    "Status":"Open",
                    "Subject":"Proprietário Lead",
                    "WhatId": dadosContato.idConta,
                    "WhoId": dadosContato.idContato
                })
            }
        }
        else{
            if(documento === "cpf"){
                dados = JSON.parse(dados)
                return JSON.stringify({
                    "AccountId": dados.id,
                    "SuppliedName": nome,
                    "SuppliedEmail": email,
                    "SuppliedPhone": telefone,
                    "Status": "New",
                    "Origin": "Whatsapp",
                    "Description": descricaoTicket,
                    "Subject": assunto,
                    "RecordTypeId": buscarRecordTypeID(fila)
                })
            }else{
                console.log("pessoa juridica")
                dados = JSON.parse(dados)
                dadosContato = JSON.parse(dadosContato)
                return JSON.stringify({
                    "ContactId": dadosContato.idContato,
                    "AccountId": dadosContato.idConta,
                    "SuppliedName": nome,
                    "SuppliedEmail": email,
                    "SuppliedPhone": telefone,
                    "Status": "New",
                    "Origin": "Whatsapp",
                    "Description": descricaoTicket,
                    "Subject": assunto,
                    "RecordTypeId": buscarRecordTypeID(fila)
                })
            }
        }
    }
}

function buscarRecordTypeID(fila){
    switch(fila){
        case "suporte técnico":
            return "0121J000000yfSNQAY"
            break
        case "assistência técnica":
            return "0125c000001MeLQAA0"
            break
        case "central de relacionamento":
            return "0125c000001MeLVAA0"
            break
        case "cursos":
            return "0125c000001MeLLAA0"
            break
        case "sdr":
            return "0125c000001MeLGAA0"
            break
        case "financeiro":
            return "0121J000000yfWfQAI"
            break
        case "estoque":
            return "0125c000001MeME"
            break
        case "faturamento":
            return "0125c000001MeM9AAK"
            break            
         case "loja virtual":
            return "0125c000001AuNsAAK"           
            break
    }
    
}

const nowUTC = (offset) => {
    let now = new Date();
    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    return new Date(utc_timestamp+ offset * 3600 * 1000);
}

describe("Teste de requisição de ticket",()=>{
    test("pessoa fisica",()=>{
        let data = "2023-11-19T07:11:20"
        
        jest.useFakeTimers().setSystemTime(new Date(data));

        expect(run(
                "CPF",
                "nome",
                "email",
                "telefone",
                "descricao",
                "empresa",
                "não",
                "assunto",
                "suporte técnico",
                JSON.stringify({"id":"id"}),
                "origem",
                null
                )
        ).toStrictEqual(JSON.stringify({
                "AccountId": "id",
                "SuppliedName": "nome",
                "SuppliedEmail": "email",
                "SuppliedPhone": "telefone",
                "Status": "New",
                "Origin": "Whatsapp",
                "Description": "descricao",
                "Subject": "assunto",
                "RecordTypeId": "0121J000000yfSNQAY"
        }))
        
    })

    test("pessoa juridica",()=>{
        let data = "2023-11-19T07:11:20"
        
        jest.useFakeTimers().setSystemTime(new Date(data));

        expect(
                run(
                    "CNPJ",
                    "nome",
                    "email",
                    "telefone",
                    "descricao",
                    "empresa",
                    "não",
                    "assunto",
                    "assistência técnica",
                    JSON.stringify({id:"idConta"}),
                    "origem",
                    JSON.stringify({"idConta":"idConta","idContato":"idContato"})
                )
        ).toStrictEqual(JSON.stringify({
            "ContactId": "idContato",
            "AccountId": "idConta",
            "SuppliedName": "nome",
            "SuppliedEmail": "email",
            "SuppliedPhone": "telefone",
            "Status": "New",
            "Origin": "Whatsapp",
            "Description": "descricao",
            "Subject": "assunto",
            "RecordTypeId": "0125c000001MeLQAA0"
        }))
        
    })

    test("leads",()=>{
        let data = "2023-11-19T07:11:20"
        
        jest.useFakeTimers().setSystemTime(new Date(data));
//documento,
//nome,
//email,
//telefone,
//descricaoTicket,
//empresa,
//lead,
//assunto,
//fila,
//dados,
//origem,
//dadosContato
        expect(run(null,"nome","email","telefone","descricao",null,"sim","assunto","fila",null,"origem",null)).toStrictEqual(JSON.stringify({
                "SuppliedName": "nome",
                "SuppliedEmail": "email",
                "SuppliedPhone": "telefone",
                "Status": "New",
                "Origin": "Whatsapp",
                "Description": "descricao",
                "Subject": "assunto",
                "RecordTypeId": "0125c000001MeLGAA0"
        }))
        
    })
})

*/