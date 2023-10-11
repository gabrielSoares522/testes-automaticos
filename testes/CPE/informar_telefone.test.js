function run(input) {
    let telefone = input

    telefone = telefone.replace("+55",'')
    telefone = telefone.replace(/\D/g,'')
    
    if(telefone.indexOf("55")==0 && telefone.length >11){
        telefone = telefone.substring(2)
    }
    if(telefone.indexOf("0")==0){
        telefone = telefone.substring(1)
    }
    return telefone.length == 11 || telefone.length == 10
}

test("validar telefone valido",()=>{
    let telefones = [
        "(55) 97479-6838",
        "(53) 96854-0756",
        "(54) 98212-2547"
    ]
    telefones.forEach((telefone)=>{
        expect(telefone+":"+run(telefone)).toBe(telefone+":"+true)
    })
})