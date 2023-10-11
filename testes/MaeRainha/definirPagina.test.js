function run(input,numeroPagina){
    input = String(input).trim().toLowerCase()

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

    if(input=="100"){
        numeroPagina = numeroPagina+1
    }
    if(input=="101"){
        if(numeroPagina >0){
            numeroPagina = numeroPagina-1
        }
    }
    
    return numeroPagina
}

test("Teste 1", () => {
    var input = "100"
    var numeroPagina = 0
    var esperado = 1
    var resposta = run(input,numeroPagina)
    expect(resposta).toBe(esperado)
})

test("Teste 2", () => {
    var input = "100"
    var numeroPagina = undefined
    var esperado = 1
    var resposta = run(input,numeroPagina)
    expect(resposta).toBe(esperado)
})


test("Teste 3", () => {
    var input = "1"
    var numeroPagina = undefined
    var esperado = 0
    var resposta = run(input,numeroPagina)
    expect(resposta).toBe(esperado)
})

test("Teste 4", () => {
    var input = "101"
    var numeroPagina = undefined
    var esperado = 0
    var resposta = run(input,numeroPagina)
    expect(resposta).toBe(esperado)
})

test("Teste 5", () => {
    var input = "101"
    var numeroPagina = 1
    var esperado = 0
    var resposta = run(input,numeroPagina)
    expect(resposta).toBe(esperado)
})

