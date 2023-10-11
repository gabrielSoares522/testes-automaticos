function run(input) {
    input = input.toLowerCase()
    input = input.trim()
    let tam = input.length

    if(input.includes("@")==false){
        return false
    }

    let info = input.split("@")
    let nick = info[0]
    let domain = info[1]
    
    if(domain.includes(".")==true){
        if(info[0] == domain.split(".")[0]){
            return false
        }
    }else{
        return false
    }
    let ultimoCaracter = input.substring((tam-1))
    if(ultimoCaracter =="@" || ultimoCaracter =="."){
        return false
    }
    let padrao = new RegExp("^([a-z0-9|.|_|-]+)@([a-z0-9|.|_]+)$")
    return input.match(padrao)!=null
}

test("retornar false para e-mail invalido",()=>{
    expect(run("aaa@aaa")).toBe(false)
    expect(run("aaa@aaa.")).toBe(false)
    expect(run("aaa@")).toBe(false)
    expect(run("@aaaa")).toBe(false)
    expect(run("aaaa@.")).toBe(false)
    expect(run("aaaa.")).toBe(false)
    expect(run("aaaa@aa@com")).toBe(false)
    expect(run("jose@jose.com.br")).toBe(false)
    expect(run("teste12@teste")).toBe(false)
})
test("retornar true para e-mail valido",()=>{
    let emails = ["gabriel.soares@izysoft.com.br","ljpeixoto@izysoft.com.br"]
    emails.forEach(email => {
        expect(run(email)).toBe(true)
    });
    
})