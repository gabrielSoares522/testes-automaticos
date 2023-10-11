function run(resposta, status,encontrado) {
    if(status == "200" && encontrado == "true"){
        resposta = JSON.parse(resposta)
        let dados = resposta.records[0]
        return JSON.stringify({
            "id":dados.Id,
            "nomeCompleto": dados.Name,
            "email": dados.FC_Email_pessoal__pc,
            "telefone": dados.Phone,
            "CPF": dados.FC_CNPJ_CPF__c,
            "idResponsavel": dados.OwnerId
        })

    }
}
test("hfhyy",()=>{
    expect(run(JSON.stringify({"totalSize":1,"done":true,"records":[{"attributes":{"type":"Account","url":"/services/data/v56.0/sobjects/Account/0015c00002KKVzyAAH"},"Id":"0015c00002KKVzyAAH","Name":"diego santos","Phone":"(33) 11122-4444","FC_Email_pessoal__pc":"diego.fisica@teste.com.br","FC_CNPJ_CPF__c":"222.333.444-55","OwnerId":"0051J000006ybQiQAI"}]}),"200","true"))
    .toBe('{"id":"0015c00002KKVzyAAH","nomeCompleto":"diego santos","email":"diego.fisica@teste.com.br","telefone":"(33) 11122-4444","CPF":"222.333.444-55","idResponsavel":"0051J000006ybQiQAI"}')
})