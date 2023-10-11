function run(contactIndentity, canal) {
    if(canal =="WhatsApp"){
        return formatarTelefone(contactIndentity.split("@")[0])
    }else{
        return "não tem"
    }
}

function formatarTelefone(input) {
    let telefone = String(input)

    telefone = telefone.replace("+55",'')
    telefone = telefone.replace(/\D/g,'')
    if(telefone.length == 13){
        if(telefone.indexOf("55")==0){
            telefone = telefone.substring(2)
        }
    }
    if(telefone.indexOf("0")==0){
        telefone = telefone.substring(1)
    }
    if(telefone.length == 11){
        return "("+telefone.substring(0,2)+") "+telefone.substring(2,7)+"-"+telefone.substring(7)
    } else {
        if(telefone.length == 10){
            return "("+telefone.substring(0,2)+") "+telefone.substring(2,6)+"-"+telefone.substring(6)
        }else{
            return telefone
        }
    }
}

describe("retorna o telefone formatado", () => {
    test("(13) 99807-1234 (13 caracteres)", () => {
        expect(formatarTelefone("5513998071234")).toBe("(13) 99807-1234");
    });
    
});