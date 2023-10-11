function validarCNPJ(cnpj){
    if(cnpj.indexOf(".",2) == 2 && cnpj.indexOf(".",6) == 6 && cnpj.indexOf("/",10) == 10  && cnpj.indexOf("-",15) == 15)
    {
        cnpj = cnpj.replace(".","")
        cnpj = cnpj.replace(".","")
        cnpj = cnpj.replace("/","")
        cnpj = cnpj.replace("-","")
    }
    
    if(cnpj.length == 14){
        cnpj = cnpj.replace(/[^\d]+/g,'');
        if(cnpj.length == 14){
            return true
        }
    }
    
    return false
}
function formatarCNPJ(cnpj){
    if(cnpj.indexOf(".",2) == 2 && cnpj.indexOf(".",6) == 6 && cnpj.indexOf("/",10) == 10  && cnpj.indexOf("-",15) == 15)
    {
        return cnpj
    }else{
        return cnpj.substring(0,2)+"."+cnpj.substring(2,5)+"."+cnpj.substring(5,8)+"/"+cnpj.substring(8,12)+"-"+cnpj.substring(12)
    }
}
//Matriz: 12.345.678/0001-00. Filial 1: 12.345.678/0002-00. Filial 2: 12.345.678/0003-00.
test("retornar true para cnpj valido",()=>{
    expect(validarCNPJ("12.345.678/0001-00")).toBe(true)
    expect(validarCNPJ("12.345.678/0002-00")).toBe(true)
    expect(validarCNPJ("12345678000300")).toBe(true)
    expect(formatarCNPJ("12345678000300")).toBe("12.345.678/0003-00")
    expect(formatarCNPJ("12.345.678/0003-00")).toBe("12.345.678/0003-00")
})

test("retornar false para cnpj invalido",()=>{
    expect(validarCNPJ("a12.34a5.67a/0a01-00")).toBe(false)
    expect(validarCNPJ("12.3g45.f78/a002-00")).toBe(false)
    expect(validarCNPJ("1a.3a5a678a0002-00")).toBe(false)
    expect(validarCNPJ("123a56a80a0300")).toBe(false)
})