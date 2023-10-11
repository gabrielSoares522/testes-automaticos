function run(hoje, ultimaAtualizacao, qtDiasRevisao) {
    if(ultimaAtualizacao == undefined){
		return true
	}
    
    let dataHoje = new Date(hoje)
    let dataUltimaAtualizacao = new Date(ultimaAtualizacao)

    let diferenca = dataHoje.getTime() - dataUltimaAtualizacao.getTime()
    let diferencaEmDias = Math.round(diferenca / (1000 * 60 * 60 * 24))

    if(diferencaEmDias >= qtDiasRevisao){
        return true
    }else{
        return false
    }
	
}

describe("retorna se a atualização é necessária", () => {
    test("hoje é 2020-02-01 e a última atualização foi em 2019-12-31", () => {
        expect(run("2020-02-01", "2019-12-31", 30)).toBe(true);
    });
    test("hoje é 2022-01-03 a última atualização foi em 2022-01-01", () => {
        expect(run("2022-01-03", "2022-01-01", 5)).toBe(false);
    });
    
    test("hoje é 2022-01-02 a última atualização foi em 2022-01-01", () => {
        expect(run("2022-01-02", "2022-01-01", 1)).toBe(true);
    });

    
    test("hoje é 2022-01-13 a última atualização foi em 2022-01-01", () => {
        expect(run("2022-01-13", "2022-01-01", 14)).toBe(false);
    });
    
    
    test("hoje é 2022-01-14 a última atualização foi em 2022-01-01", () => {
        expect(run("2022-01-14", "2022-01-01", 14)).toBe(false);
    });

});