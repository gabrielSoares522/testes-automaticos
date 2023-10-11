function respostaPossui(input,esperados){
    let retorno = false
    input = input.trim().toLowerCase()
    
	esperados.forEach((esperado,indice) => {
        esperado = esperado.trim().toLowerCase()

		if(input.includes(esperado) == true){
			retorno = true
            indice = esperados.length
		}
	})

	return retorno
}

describe("retorna verdadeiro se a ", ()=>{
    test("resposta possui a palavra 'CPF'", ()=>{
        expect(respostaPossui("eu quero ver o meu cpf",["CPF"])).toBe(true)
    })
})