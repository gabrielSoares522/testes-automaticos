function run(strCEP){
    const mascaras = [/^[0-9]{2}\.[0-9]{3}-[0-9]{3}$/, /^[0-9]{5}-[0-9]{3}$/, /^[0-9]{8}$/]

    strCEP = Trim(strCEP)
    if(strCEP.length > 0)
    {
        let resultado = false
        mascaras.forEach((mascara) =>{
            if(mascara.test(strCEP))
                resultado = true
        })
        return resultado
    }
    else{
        return false
    }
}

function Trim(strTexto)
{
    return strTexto.replace(/^\s+|\s+$/g, '');
}

test("cep invalido",()=>{
    expect(run("aaaaa")).toBe(false)
    expect(run("aaaaaaaa")).toBe(false)
    expect(run("11aaaaaa")).toBe(false)
})

test("retorna true o CEP",()=>{
    expect(run("11451-310")).toBe(true)
    expect(run("11.451-310")).toBe(true)
    expect(run("11451310")).toBe(true)
    expect(run(" 11451310 ")).toBe(true)
})
test("retorna false o CEP",()=>{
    expect(run("11.451310")).toBe(false)
    expect(run("a1145aa1310")).toBe(false)
    expect(run("aaa11451310")).toBe(false)
})