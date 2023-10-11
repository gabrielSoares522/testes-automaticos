function calcularPorcentagem(totalBruto, totalCreditos, percDescontos) {
    let totalPercentual  = 100 * ((totalCreditos+(totalBruto * (percDescontos/100))) / totalBruto)

    return (totalPercentual).toFixed(2)
}

function agregandoDesconto(valorBruto,valorDescontoTotal,valorBrutoTotal,
    PercentualTotalDesconto,ValorTotal,CreditosRestantes){

    if(CreditosRestantes > 0) {
        if(ValorTotal >= CreditosRestantes) {
            let ValorTotalRestante = ValorTotal - CreditosRestantes

            PercentualTotalDesconto = 100 * ((CreditosRestantes+valorDescontoTotal)/valorBrutoTotal)
            valorDescontoTotal =CreditosRestantes+valorDescontoTotal
            ValorTotal = ValorTotalRestante
            CreditosRestantes = 0
        } else {
            CreditosRestantes -= ValorTotal
            valorDescontoTotal = ValorTotal+valorDescontoTotal
            PercentualTotalDesconto = 100
            ValorTotal = 0
        } 
    } else {
        PercentualTotalDesconto = ListaItens.Item("Perc_Desconto")
    }
    return {
        valorBruto: valorBruto,
        valorDescontoTotal: valorDescontoTotal,
        valorBrutoTotal: valorBrutoTotal,
        PercentualTotalDesconto: PercentualTotalDesconto,
        valorTotal: ValorTotal,
        CreditosRestantes: CreditosRestantes
    }
}

function listarProdutos(produtos){
    let lista=[]
    for(let i=0; i<produtos.length; i++){
        
        let valorBruto = produtos[i].valorBruto
        let valorDescontoTotal = produtos[i].valorDescontoTotal
        let valorBrutoTotal = produtos[i].valorBrutoTotal
        let PercentualTotalDesconto = produtos[i].PercentualTotalDesconto
        let ValorTotal = produtos[i].ValorTotal
        let CreditosRestantes = produtos[i].CreditosRestantes

        lista.push({
            valorBruto: valorBruto,
            valorDescontoTotal: valorDescontoTotal,
            valorBrutoTotal: valorBrutoTotal,
            PercentualTotalDesconto: PercentualTotalDesconto,
            valorTotal: ValorTotal,
            CreditosRestantes: CreditosRestantes
        })
    }
    return lista
}
describe('Teste de calculo de porcentagem', () => {
    test("porcetagem de 1000 com 10% de desconto somado a 100 de credito", () => {
        expect(calcularPorcentagem(1000, 100, 10)).toBe("20.00")
    })

    test("porcentagem de 6 com 0% de desconto somado a 1 de credito", ()=>{
        expect(calcularPorcentagem(6, 1, 0)).toBe("16.67")
    })

    test("porcentagem de 6 com 0% de desconto somado a 0 de credito", ()=>{
        expect(calcularPorcentagem(6, 0, 0)).toBe("0.00")
    })

    test("porcentagem de 57 com 17.543859649123% de desconto somado a 7 de credito", ()=>{
        expect(calcularPorcentagem(57, 7, 17.543859649123)).toBe("29.82")
    })
    test("porcentagem de 57 com 12.280701754386% de desconto somado a 10 de credito", ()=>{
        expect(calcularPorcentagem(57, 10, 12.280701754386)).toBe("29.82")
    })
})

describe("Teste de agregação de desconto", () => {
    test("valor bruto 6 com 0% de desconto e 1 de credito",() =>{
        let resultado = agregandoDesconto(6,0,6,0,6,1)

        expect(resultado.valorBruto).toBe(6)
        expect(resultado.valorDescontoTotal).toBe(1)
        expect(resultado.valorBrutoTotal).toBe(6)
        expect(parseFloat(resultado.PercentualTotalDesconto.toFixed(2))).toBe(16.67)
        expect(resultado.valorTotal).toBe(5)
        expect(resultado.CreditosRestantes).toBe(0)

    })

    test("valor bruto 100 com 10% de desconto e 5 de credito",() =>{
        let resultado = agregandoDesconto(100,10,100,10,90,5)

        expect(resultado.valorBruto).toBe(100)
        expect(resultado.valorDescontoTotal).toBe(15)
        expect(resultado.valorBrutoTotal).toBe(100)
        expect(parseFloat(resultado.PercentualTotalDesconto.toFixed(2))).toBe(15)
        expect(resultado.valorTotal).toBe(85)
        expect(resultado.CreditosRestantes).toBe(0)

    })

    test("valor bruto 100 com 0% de desconto e 110 de credito",() =>{
        let resultado = agregandoDesconto(100,0,100,0,100,110)

        expect(resultado.valorBruto).toBe(100)
        expect(resultado.valorDescontoTotal).toBe(100)
        expect(resultado.valorBrutoTotal).toBe(100)
        expect(parseFloat(resultado.PercentualTotalDesconto.toFixed(2))).toBe(100)
        expect(resultado.valorTotal).toBe(0)
        expect(resultado.CreditosRestantes).toBe(10)

    })

    test("valor bruto 100 com 10% de desconto e 110 de credito",() =>{
        let resultado = agregandoDesconto(100,10,100,10,90,110)

        expect(resultado.valorBruto).toBe(100)
        expect(resultado.valorDescontoTotal).toBe(100)
        expect(resultado.valorBrutoTotal).toBe(100)
        expect(parseFloat(resultado.PercentualTotalDesconto.toFixed(2))).toBe(100)
        expect(resultado.valorTotal).toBe(0)
        expect(resultado.CreditosRestantes).toBe(20)

    })
})