function run(input) {
    let inputTratado = String(input).replace(",",".")
    inputTratado = inputTratado.trim()
    
    if(isNaN(inputTratado)== false){
        let area = parseInt(inputTratado)
        if(area >0){
            return true
        }
    }
    return false
}

test("retornar true no input de area valido",()=>{
   
    expect(run("400")).toBe(true)
    expect(run("40")).toBe(true)
    expect(run("40.5")).toBe(true)
    expect(run("40,5")).toBe(true)
})
test("retornar false no input de area invalido",()=>{
   
    expect(run("")).toBe(false)
    expect(run("valor")).toBe(false)
    expect(run("12 2")).toBe(false)
    expect(run(NaN)).toBe(false)
})