function run(status, corpo) {
	if(status == "200"){
		corpo = JSON.parse(corpo)
		try{
			if(corpo.erro == true){
				return "invalido"
			}
		}catch (ex){

		}
		if(corpo.cep == "" || corpo.cep == "" || corpo.logradouro == "" || corpo.complemento == "" || corpo.bairro == "" || corpo.localidade == "" || corpo.uf == "" || corpo.ibge == ""){
            return "invalido"
		}

		return JSON.stringify({
			"cep": corpo.cep,
			"rua": corpo.logradouro,
			"complemento": corpo.complemento,
			"bairro": corpo.bairro,
			"cidade": corpo.localidade,
			"estado": corpo.uf,
			"codigoCidade": corpo.ibge
		})
	}else{
        return "invalido"
    }
}


test("endereco 1",()=>{
    let expected ="invalido"
    let corpo = {
        "cep": "13260-000",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "Morungaba",
        "uf": "SP",
        "ibge": "3532009",
        "gia": "4686",
        "ddd": "11",
        "siafi": "6741"
    }
    expect(run("200",JSON.stringify(corpo))).toBe(expected)
})

test("endereco 2",()=>{
    let expected ="invalido"
    let corpo = {
        "erro": true
    }
    expect(run("200",JSON.stringify(corpo))).toBe(expected)
})


test("endereco 3",()=>{
    let corpo = {
        "cep": "11451-310",
        "logradouro": "Rua Professor Carvalho Pinto",
        "complemento": "até 589/590",
        "bairro": "Sítio Paecara (Vicente de Carvalho)",
        "localidade": "Guarujá",
        "uf": "SP",
        "ibge": "3518701",
        "gia": "3359",
        "ddd": "13",
        "siafi": "6475"
    }

    expect(run("200",JSON.stringify(corpo))).toBe(JSON.stringify({
        "cep": "11451-310",
        "rua": "Rua Professor Carvalho Pinto",
        "complemento": "até 589/590",
        "bairro":"Sítio Paecara (Vicente de Carvalho)",
        "cidade": "Guarujá",
        "estado": "SP",
        "codigoCidade": "3518701"
    }))
})

test("endereco 4",()=>{
    let expected ="invalido"
    let corpo = {
        "cep": "13260-000",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "Morungaba",
        "uf": "SP",
        "ibge": "3532009",
        "gia": "4686",
        "ddd": "11",
        "siafi": "6741"
    }

    expect(run("400",JSON.stringify(corpo))).toBe(expected)
})