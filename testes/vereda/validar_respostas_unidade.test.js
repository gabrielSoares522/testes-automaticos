function run(input) {
	input = String(input).trim().toLowerCase()

	let retorno = "invalido"

	retorno = (respostaPossui(input, ["sao bernardo"]) == true?"São Bernardo - SP": retorno)
	retorno = (respostaPossui(input, ["mooca"]) == true?"Mooca, São Paulo - SP": retorno)
	retorno = (respostaPossui(input, ["santo Andre"]) == true?"Santo André - SP": retorno)


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