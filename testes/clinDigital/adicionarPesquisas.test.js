function run(pesquisas, nota){
    try{
        pesquisas = JSON.parse(pesquisas);
        pesquisas.push({
            "descricao": "Pesquisa Satisfação",
            "itens":[
                {
                    "questao":"Nota de Atendimento",
                    "resposta": nota.toString(),
                    "motivo":""
                }]
        })
    }catch(e){
        pesquisas = [];
        pesquisas.push({
            "descricao": "Pesquisa Satisfação",
            "itens":[
                {
                    "questao":"Nota de Atendimento",
                    "resposta": nota.toString(),
                    "motivo":""
                }]
        })
    }
    return JSON.stringify(pesquisas);
}

describe('Adicionar Pesquisas', () => {
    test('teste 1',()=>{
        expect(run('[]', 10)).toBe('[{"descricao":"Pesquisa Satisfação","itens":[{"questao":"Nota de Atendimento","resposta":"10","motivo":""}]}]');
    })
});