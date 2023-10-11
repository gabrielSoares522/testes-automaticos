function run(documento,nome,email,telefone,idConta,idContato,descricaoTicket,empresa,lead,assunto,fila,dados,origem) {
    lead = lead.toLowerCase()
    documento = documento.toLowerCase()
    fila = fila.toLowerCase()
    dados = JSON.parse(dados)

    if(lead =="sim"){
        return JSON.stringify({
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
        let hoje = nowUTC("-3")
        let vencimento = nowUTC("-3")
        vencimento.setDate(vencimento.getDate() + 1)
        
        if(documento == "cpf"){
            return JSON.stringify({
                "ActivityDate": vencimento.toISOString(),
                "Description": descricaoTicket,
                "IsReminderSet": true,
                "Origem_do_Lead__c": origem,
                "OwnerId": dados.idResponsavel,
                "Priority":"Normal",
                "RecordTypeId":"0121J000000qxziQAA",
                "ReminderDateTime": hoje.toISOString(),
                "Status":"Open",
                "Subject":"Whats-App / SMS",
                "WhatId": idConta
            })
        } else {
            return JSON.stringify({
                "ActivityDate": vencimento.toISOString(),
                "Description": descricaoTicket,
                "IsReminderSet": true,
                "Origem_do_Lead__c": origem,
                "Empresa__c": dados.nomeEmpresa,
                "OwnerId": dados.idResponsavel,
                "Priority":"Normal",
                "RecordTypeId":"0121J000000qxziQAA",
                "ReminderDateTime": hoje.toISOString(),
                "Status":"Open",
                "Subject":"Whats-App / SMS",
                "WhatId": idConta,
                "WhoId": idContato
            })
        }

    }
}

function buscarRecordTypeID(fila){
    switch(fila){
        case "suporte técnico":
            return "0121J000000yfSNQAY"
            break
        case "assistencia técnica":
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
    }
    
}

const nowUTC = (offset) => {
    let now = new Date();
    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    return new Date(utc_timestamp+ offset * 3600 * 1000);
}

test("rqttttt",()=>{
    jest.useFakeTimers().setSystemTime(new Date("2023-03-27T10:54:00"))

    let resultado = run("cpf","nome","email","telefone","idConta","idContato","descricaoTicket","empresa","lead","assunto","estoque",JSON.stringify({"idResponsavel":"idResponsavel"}),"origem")
    expect(resultado).toBe('{"ActivityDate":"2023-03-28T10:54:00.000Z","Description":"descricaoTicket","IsReminderSet":true,"Origem_do_Lead__c":"origem","OwnerId":"idResponsavel","Priority":"Normal","RecordTypeId":"0121J000000qxziQAA","ReminderDateTime":"2023-03-27T10:54:00.000Z","Status":"Open","Subject":"Whats-App / SMS","WhatId":"idConta"}')
})