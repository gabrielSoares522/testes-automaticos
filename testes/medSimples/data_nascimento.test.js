function run(input){
    input = input.trim()
    if(input.length==10){
        let dados = input.split("/")
        if(dados.length ==3){
            for(let index =0;index <3;index++){
                dados[index] = parseInt(dados[index])
            }
            
            if(dados[0] >= 1 && dados[0] <= 31){
                if(dados[1] > 0 && dados[1] <= 12){
                    if(dados[2] > 1900){
                        return true
                    }
                }
            }
        }
    }

    return false
}
test("retornar false para datas invalidas",()=>{
    expect(run("12/01/1992]")).toBe(false)
    expect(run("12/01aaa1/1992]")).toBe(false)
    expect(run("12/13/1922")).toBe(false)
    expect(run("32/13/1922")).toBe(false)
    expect(run("-1/13/1922")).toBe(false)
    expect(run("-1/-1/1922")).toBe(false)
    expect(run("-1/-1/-922")).toBe(false)
})