function run1(input) {
    let ticket = JSON.parse(input)
    
    if(ticket.tags != undefined){
        return JSON.stringify(ticket.tags)
    } else {
        return "sem tags"
    }
}

function run2(requisicaoSalvarLead, tags) {
    let novaRequisicao = JSON.parse(requisicaoSalvarLead)
    tags = JSON.parse(tags)

    if(tags != "sem tags" && tags != undefined) {
        let index = 0
        for(index = 0; index < tags.length; index++) {
            novaRequisicao.tags.push(tags[index])
        }
    }
    return JSON.stringify(novaRequisicao)
}

test("pegando a tag receba",()=>{
    expect(run1(JSON.stringify({"tags":["receba"]}))).toBe(JSON.stringify(["receba"]))
})


test("adicionadno a tag receba",()=>{
    expect(run2(JSON.stringify({"tags":["esperando"]}),JSON.stringify(["receba"]))).toBe(JSON.stringify({"tags":["esperando","receba"]}))
})

test("adicionadno a tag receba",()=>{
    expect(run2(JSON.stringify({"tags":["esperando"]}),JSON.stringify(["sem tags"]))).toBe(JSON.stringify({"tags":["esperando"]}))
})