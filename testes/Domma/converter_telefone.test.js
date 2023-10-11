function run(input,eTelefoneValido) {
    if(eTelefoneValido == true){
        let telefone = String(input)

        telefone = telefone.replace("+55",'')
        telefone = telefone.replace(/\D/g,'')
        
        if(telefone.indexOf("55")==0){
            telefone = telefone.substring(2)
        }
        if(telefone.indexOf("0")==0){
            telefone = telefone.substring(1)
        }
        if(telefone.length == 11){
            return "("+telefone.substring(0,2)+") "+telefone.substring(2,7)+"-"+telefone.substring(7)
            //01 23456 7890
        }
        else{
            if(telefone.length == 10){
                return "("+telefone.substring(0,2)+") "+telefone.substring(2,6)+"-"+telefone.substring(6)
                //01 2345 6789

            }else{
                return telefone
            }
        }
    } else {
        return false
    }
}

test("retornar true no input do telefone valido",()=>{
    let telefonesInput = ["(13) 99807-0619",
    "(99) 9999-9999",
    "(99)9999-9999",
    "(13)99807-0619",
    "+55 (13) 99807-0619",
    "+55 (99) 9999-9999",
    "+55(99)9999-9999",
    "+55(13)99807-0619",
    "13998070619",
    "1399070619",
    "5513998070619",
    "551399070619",
    "(013) 99807-0619",
    "(099) 9999-9999"]
    let telefonesOutput = ["(13) 99807-0619",
    "(99) 9999-9999",
    "(99) 9999-9999",
    "(13) 99807-0619",
    "(13) 99807-0619",
    "(99) 9999-9999",
    "(99) 9999-9999",
    "(13) 99807-0619",
    "(13) 99807-0619",
    "(13) 9907-0619",
    "(13) 99807-0619",
    "(13) 9907-0619",
    "(13) 99807-0619",
    "(99) 9999-9999"]
    for(let i = 0;i<telefonesInput.length;i++){
        expect(i+"-"+run(telefonesInput[i],true)).toBe(i+"-"+telefonesOutput[i])
    }
})

test("retornar false no input do telefone invalido",()=>{
    expect(run("erro",false)).toBe(false)
    expect(run("(99) 9sa9-999a9",false)).toBe(false)
    expect(run("(99)a-9999",false)).toBe(false)
})