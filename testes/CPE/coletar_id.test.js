function run(corpoResponsavel, statusResponsavel) {
    
    if(statusResponsavel == "200"){
        corpoResponsavel = JSON.parse(corpoResponsavel)
        
        if(corpoResponsavel.totalSize > 0){
            return corpoResponsavel.records[0].Id
        }
    }
}
const corpoResponsavel = {"totalSize":1,"done":true,"records":[{"attributes":{"type":"User","url":"/services/data/v56.0/sobjects/User/0051J000006ybQiQAI"},"Id":"0051J000006ybQiQAI","Name":"Alan Silva"}]}

function run2(corpoConta, statusConta) {
    try{
        corpoConta = JSON.parse(corpoConta)
        
        if(corpoConta[0].errorCode == "DUPLICATES_DETECTED"){
            return corpoConta[0].duplicateResut.matchResults[0].matchRecords[0].record.Id
        }
    } catch (exe){

    }
    if(statusConta == "201"){
        return corpoConta.id
    }
}

const corpoConta = [{"duplicateResut":{"allowSave":false,"duplicateRule":"Contas","duplicateRuleEntityType":"Account","errorMessage":"Usar um desses registros?","matchResults":[{"entityType":"Account","errors":[],"matchEngine":"ExactMatchEngine","matchRecords":[{"additionalInformation":[],"fieldDiffs":[],"matchConfidence":100.0,"record":{"attributes":{"type":"Account","url":"/services/data/v56.0/sobjects/Account/0015c00002Lz9mUAAR"},"Id":"0015c00002Lz9mUAAR"}}],"rule":"Contas_regra_de_correspond_ncia_17_06_21","size":1,"success":true}]},"errorCode":"DUPLICATES_DETECTED","message":"Usar um desses registros?"}]

test("aaaa",()=>{
    expect(run(JSON.stringify(corpoResponsavel),"200")).toBe("0051J000006ybQiQAI")
})


test("bbb",()=>{
    expect(run2(JSON.stringify(corpoConta),"201")).toBe("0015c00002Lz9mUAAR")
})