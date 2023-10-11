function coletarDDI(telefone){
    telefone = filtrarDigitos(telefone);
    if(telefone.length == 13){
        return "+"+ telefone.substring(0,2);
    }
    
    if(telefone.length == 11){
        return "+"+ telefone.substring(0,1);
    }

    if(telefone.length == 12){
        return "+"+ telefone.substring(0,3);
    }
    
    return "+55"
}

function filtrarDigitos(telefone){
    return telefone.replace(/\D/g, "");
}

describe("retorna o DDI do telefone", () => {
    test("+55 11 99999-9999 (13 caracteres)", () => {
        expect(coletarDDI("+55 11 99999-9999")).toBe("+55");
        expect(coletarDDI("5511999999999")).toBe("+55");
        expect(coletarDDI("+55 (11) 99999-9999")).toBe("+55");
    });
    /*test("11 99999-9999 (11 caracteres)", () => {
        expect(coletarDDI("11 99999-9999")).toBe("+55");
        expect(coletarDDI("11999999999")).toBe("+55");
        expect(coletarDDI("(11) 99999-9999")).toBe("+55");
    });*/
    test("+351 961 915 174 (12 caracteres)", () => {
        expect(coletarDDI("+351 961 915 174")).toBe("+351");
        expect(coletarDDI("351961915174")).toBe("+351");
    });
    test("+1 202-555-0176 (12 caracteres)", () => {
        expect(coletarDDI("+1 202-555-0176")).toBe("+1");
        expect(coletarDDI("12025550176")).toBe("+1");
    });
});