function run(input) {
    let telefone = input

    telefone = telefone.replace("+55",'')
    telefone = telefone.replace(/\D/g,'')
    
    if(telefone.indexOf("55")==0){
        telefone = telefone.substring(2)
    }
    if(telefone.indexOf("0")==0){
        telefone = telefone.substring(1)
    }
    return telefone.length == 11 || telefone.length == 10
}

test("retornar true no input do telefone valido",()=>{
   
    expect(run("(13) 99807-0619")).toBe(true)
    expect(run("(99) 9999-9999")).toBe(true)
    expect(run("(99)9999-9999")).toBe(true)
    expect(run("(13)99807-0619")).toBe(true)
    expect(run("+55 (13) 99807-0619")).toBe(true)
    expect(run("+55 (99) 9999-9999")).toBe(true)
    expect(run("+55(99)9999-9999")).toBe(true)
    expect(run("+55(13)99807-0619")).toBe(true)
    expect(run("13998070619")).toBe(true)
    expect(run("1399070619")).toBe(true)
    expect(run("5513998070619")).toBe(true)
    expect(run("551399070619")).toBe(true)
    expect(run("(013) 99807-0619")).toBe(true)
    expect(run("(099) 9999-9999")).toBe(true)
})

test("retornar false no input do telefone invalido",()=>{
   
    expect(run("erro")).toBe(false)
    expect(run("(99) 9sa9-999a9")).toBe(false)
    expect(run("(99)a-9999")).toBe(false)
})