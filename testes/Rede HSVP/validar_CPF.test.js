function run(cpf){
    if(cpf.indexOf(".",3) == 3 && cpf.indexOf(".",7) == 7  && cpf.indexOf("-",11) == 11)
    {
        cpf = cpf.replace(".","")
        cpf = cpf.replace(".","")
        cpf = cpf.replace("-","")
    }

    if(cpf.length == 11){
        cpf = cpf.replace(/[^\d]+/g,'');
        if(cpf.length == 11){
            return true
        }
    }
    
    return false
}

test("retorna true para CPF valido", ()=>{
    expect(run("476.390.768-97")).toBe(true)
    expect(run("47639076897")).toBe(true)
    expect(run("64680401753")).toBe(true)
})

test("retorna false para CPF invalido", ()=>{
    expect(run("..476.390.768-97....")).toBe(false)
    expect(run("476.390.768-97....")).toBe(false)
    expect(run("asd47639076897adssa")).toBe(false)
    expect(run("47639076897777")).toBe(false)
    expect(run("47639076")).toBe(false)
})