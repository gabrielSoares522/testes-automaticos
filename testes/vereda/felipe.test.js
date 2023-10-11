function validaResposta(input) {
	input = String(input).trim().toLowerCase()

	let retorno = "invalido"

	retorno = (respostaPossui(input,["sao bernardo"])== true?"São Bernardo - SP":retorno)
	retorno = (respostaPossui(input,["mooca"])== true?"Mooca, São Paulo - SP":retorno)
	retorno = (respostaPossui(input,["santo andre"])== true?"Santo André - SP":retorno)

    console.log(retorno)

	return retorno
}

function respostaPossui(input,esperados){
    let retorno = false
    input = input.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    
	esperados.forEach((esperado,indice) => {
        esperado = esperado.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

		if(input.includes(esperado) == true){
			retorno = true
            indice = esperados.length
		}
	})

	return retorno
}


function coletaLink(linkAgendarSTA, linkAgendarSBC, linkAgendarMOC, unidade) {
	unidade = unidade.trim().toLowerCase()
	switch(unidade){
		case "santo andré - sp":
			return linkAgendarSTA
			break
		case "são bernardo - sp":
			return linkAgendarSBC
			break
		case "mooca, são paulo - sp":
			return linkAgendarMOC
			break
		default:
			return linkAgendarSTA
			break
	}
}

describe("Teste de retorno do link de agendamento", () => {
    const linkAgendarSTA = "https://www.megaplasticos.com.br/agendamento-santo-andre"
    const linkAgendarSBC = "https://www.megaplasticos.com.br/agendamento-sao-bernardo"
    const linkAgendarMOC = "https://www.megaplasticos.com.br/agendamento-mooca"
    test("link de agendamento de Santo André", () => {
        let resposta = validaResposta("santo andre")

        expect(coletaLink(linkAgendarSTA, linkAgendarSBC, linkAgendarMOC, resposta)).toBe(linkAgendarSTA)
    })
    test("link de agendamento de São Bernardo", () => {
        let resposta = validaResposta("sao bernardo")

        expect(coletaLink(linkAgendarSTA, linkAgendarSBC, linkAgendarMOC, resposta)).toBe(linkAgendarSBC)
    })

    test("link de agendamento de Mooca", () => {
        let resposta = validaResposta("mooca")

        expect(coletaLink(linkAgendarSTA, linkAgendarSBC, linkAgendarMOC, resposta)).toBe(linkAgendarMOC)
    })

})