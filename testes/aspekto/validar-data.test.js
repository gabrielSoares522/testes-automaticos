function run(input){
    input = input.trim()
    let dados = input.split("/")
    if(dados.length ==3){
        for(let index =0;index <3;index++){
            dados[index] = parseInt(dados[index])
        }
        if(dados[0] > 0 && dados[0] < 31){
            if(dados[1] > 0 && dados[1] <= 12){
                if(dados[2] > 1900){
                    return true
                }
            }
        }
    }

    return false
}

test("retorna true para data valida",()=>{
    let resultados =[
        run("01/01/1990")
    ]

    for(let index = 0;index < resultados.length;index++){
        expect(resultados[index]).toBe(true)
    }
})


test("retorna false para data invalida",()=>{
    let resultados =[
        run("01-01-1990")
    ]

    for(let index = 0;index < resultados.length;index++){
        expect(resultados[index]).toBe(false)
    }
})