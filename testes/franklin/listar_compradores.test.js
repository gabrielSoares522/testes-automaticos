function run(compradores) {
    if(compradores != "sem compradores"){
        compradores = JSON.parse(compradores)
        let texto = ""
        let indice = 0
        for(indice = 0; indice < compradores.length; indice++){
            texto += (indice+1)+". "+compradores[indice]+"\n"
        }
        texto += (indice+1)+". Voltar\n"
        
        return texto
    }
    return null
}


test("b",()=>{
    let resultado = run(JSON.stringify(["Maira Hernandes","Marcia Brassica","Paulo Pereira"]))
    expect(resultado).toBe("1. Maira Hernandes\n2. Marcia Brassica\n3. Paulo Pereira\n4. Voltar\n")
})