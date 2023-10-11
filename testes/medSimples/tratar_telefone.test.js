function coletarNumero(telefone){
    telefone = telefone.replace(/\D/g, '')
    console.log(telefone)
    if(telefone.length == 13){
        return telefone.substring(2)
    }
    else{
        return telefone.substring(0,11)
    }
}
function coletarDDI(telefone){
    telefone = telefone.replace(/\D/g, '')
    if(telefone.length == 13){
        return "+" + telefone.substring(0,2)
    }
    else{
        return "+55"
    }
}

test("coletarNumero", () => {
    let telefones = ["+55 (11) 98765-4321","5513998070609","(11) 98888-8888"]
    
    expect(coletarNumero(telefones[0])).toBe("11987654321")
    expect(coletarDDI(telefones[0])).toBe("+55")
    
    expect(coletarNumero(telefones[1])).toBe("13998070609")
    expect(coletarDDI(telefones[1])).toBe("+55")
    
    expect(coletarNumero(telefones[2])).toBe("11988888888")
    expect(coletarDDI(telefones[2])).toBe("+55")

})