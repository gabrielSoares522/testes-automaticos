function run(dealsRequest) {
    let parsed = JSON.parse(dealsRequest);
    let bypass = false;
    let dealStage;
    if (parsed.status != "error") {
        if(parsed.total != 0){
            for (const key in parsed.result) {
                dealStage = parsed.results[key].properties.dealstage;
                if (dealStage == "11178993" || dealStage == "11178995" || dealStage == "11192120" || dealStage == "14157571" || dealStage == "10163945" || dealStage == "11178995" || dealStage == "7455117" || dealStage == "969987"|| dealStage == "10163944") 
                {
                    bypass = true;
                break;

                }

                else{
                    bypass = false;
                }
            }
        }
    }
    else
    {
        bypass = false;
    }
    return bypass; 
}
var erro = JSON.stringify({"status":"error","message":"validation error","correlationId":"dc584cf6-d213-4d43-a139-724066721777","errors":["The request body may not be null"]})
            var sucesso = JSON.stringify({
                "total": 1,
                "results": [
                    {
                        "id": "11178980018",
                        "properties": {
                            "amount": null,
                            "closedate": null,
                            "createdate": "2022-12-01T20:35:52.297Z",
                            "dealname": "Catarata - gabriel",
                            "dealstage": "11178993",
                            "hs_lastmodifieddate": "2022-12-01T20:38:59.479Z",
                            "hs_object_id": "11178980018",
                            "pipeline": "10163938"
                        },
                        "createdAt": "2022-12-01T20:35:52.297Z",
                        "updatedAt": "2022-12-01T20:38:59.479Z",
                        "archived": false
                    }
                ]
            })
test("tratando erro na resposta",()=>{
    let resultado = run(erro)
    expect(resultado).toBe(false)
})