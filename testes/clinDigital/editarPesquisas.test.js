function run(pesquisas, motivo){
    pesquisas = JSON.parse(pesquisas);
    pesquisas.forEach((pesquisa, indicePesquisa) => {
        if(pesquisa.descricao == 'Pesquisa Satisfação'){

            pesquisa.itens.forEach((item, indiceItem) => {
                if(item.questao == 'Nota de Atendimento'){
                    pesquisas[indicePesquisa].itens[indiceItem].motivo = motivo;
                }
            })
        }
    })
    
    return JSON.stringify(pesquisas);
}

describe('Adicionar Pesquisas', () => {
    test('teste 1',()=>{
        expect(run('[{"descricao":"Pesquisa Satisfação","itens":[{"questao":"Nota de Atendimento","resposta":"10","motivo":""}]}]', "motivo")).toBe('[{"descricao":"Pesquisa Satisfação","itens":[{"questao":"Nota de Atendimento","resposta":"10","motivo":"motivo"}]}]');
    })
});