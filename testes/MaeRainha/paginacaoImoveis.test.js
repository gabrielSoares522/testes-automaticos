function run(imoveis,tamPagina,numeroPagina) {
    imoveis = JSON.parse(imoveis);
    
    let escriturado = ""
    let imoveisList = ""
    
    tamPagina = parseInt(tamPagina)
    if(numeroPagina == "undefined" || numeroPagina == undefined || numeroPagina == null || numeroPagina == "") {
        numeroPagina = 0
    }
    else{
        try{
            numeroPagina = parseInt(numeroPagina)
        } catch (ex){
            numeroPagina = 0
        }
    }

    try{
        let contador = 0
        for(let indice = (tamPagina * numeroPagina);indice < ((tamPagina * numeroPagina) + tamPagina);indice++){
            if(imoveis[indice].escriturado === "S") {
                escriturado = "Sim"
            } else {
                escriturado = "Não"
            }
            
            contador++

            imoveisList += "\n" + contador + ". Contrato: " + imoveis[indice].contrato + "\n" 
                + "Unidade: " + imoveis[indice].edificacao + " / " + imoveis[indice].codigo + "\n"
                + "Empreend.: " + imoveis[indice].empreendimento + "\n"
                + "Escriturado: " + escriturado + "\n"
        }
    } catch (ex) {  }

    return imoveisList;
}

const imoveis = require("./imoveis.json")

test("Teste 0",()=>{
    
    expect(run(JSON.stringify(imoveis), 1, 0)).toBe("\n1. Contrato: 0121\nUnidade: QD - 11 / LT -20\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n")
})
const expected = "\n1. Contrato: 0121\nUnidade: QD - 11 / LT -20\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"2. Contrato: 0122\nUnidade: QD - 11 / LT -21\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"3. Contrato: 0196\nUnidade: QD - 10 / LT -01\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"4. Contrato: 0196\nUnidade: QD - 10 / LT -02\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"5. Contrato: 0196\nUnidade: QD - 10 / LT -03\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"6. Contrato: 0196\nUnidade: QD - 10 / LT -07\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"7. Contrato: 0196\nUnidade: QD - 10 / LT -08\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"8. Contrato: 0196\nUnidade: QD - 10 / LT -09\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"9. Contrato: 0196\nUnidade: QD - 10 / LT -10\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
"10. Contrato: 0196\nUnidade: QD - 10 / LT -11\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n"

test("Teste 1",()=>{
    
    expect(run(JSON.stringify(imoveis), 10, 0).length).toBe(expected.length)
})

test("Teste 2",()=>{
    
    expect(run(JSON.stringify(imoveis), 10, undefined).length).toBe(expected.length)
})

test("Teste 3",()=>{
    
    expect(run(JSON.stringify(imoveis), 10, "undefined").length).toBe(expected.length)
})

test("Teste 4",()=>{
    
    expect(run(JSON.stringify(imoveis), "10", "0").length).toBe(expected.length)
})
const imoveis2= [{
    "codigo":"LT -20",
    "valor":"28008,75",
    "escriturado":"S",
    "edificacao":"QD - 11",
    "contratoAlternativo":"0121",
    "empreendimento":"ALD.01.0002",
    "contrato":"0121",
    "numeroImovel":"358"
 },
 {
    "codigo":"LT -21",
    "valor":"28008,75",
    "escriturado":"S",
    "edificacao":"QD - 11",
    "contratoAlternativo":"0122",
    "empreendimento":"ALD.01.0002",
    "contrato":"0122",
    "numeroImovel":"359"
 }]
 const expected2 = "\n1. Contrato: 0121\nUnidade: QD - 11 / LT -20\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n\n"+
 "2. Contrato: 0122\nUnidade: QD - 11 / LT -21\nEmpreend.: ALD.01.0002\nEscriturado: Sim\n"
 
test("Teste 5",()=>{
    
    expect(run(JSON.stringify(imoveis2), "10", "0").length).toBe(expected2.length)
})
