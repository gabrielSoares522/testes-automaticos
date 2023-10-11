let corpoTitulos = JSON.stringify({
  "parcela": {
    "Key_Empreendimento": "ADA.01.0001",
    "Key_Centro": "ADA.01.0009",
    "Key_Nucleo": "02",
    "Key_Contrato": "ADA.01.0001.0238",
    "Contrato": "0238-0",
    "Key_Cliente": "0144",
    "AnoVencto": "2023",
    "MesVencto": "09",
    "DataVencimento": "10/09/2023",
    "ElementoPreco_Cod": "ENT",
    "ElementoPreco_Titulo": "Entrada",
    "ValorPrincipal": "2.595,85",
    "ValorReajuste": "0,00",
    "ValorJurosCon": "0,00",
    "ValorParcela": "2.595,85",
    "ValorEncFin": "0,00",
    "ValorMulta": "51,92",
    "ValorJurosMora": "18,17",
    "ValorDesconto": "0,00",
    "ValorTotal": "2.665,94",
    "AnoPagto": "",
    "MesPagto": "",
    "DataPagto": "",
    "ValorPago": "0,00",
    "ValorEmAberto": "2.665,94",
    "ImovelExtenso": "Quadra E : 7.",
    "Situacao": "Em Aberto",
    "Par_Numero": "003",
    "Par_Serie": "003_003",
    "DataReferencia": "01/10/2023",
    "Cliente_CPFCNPJ": "64680401753",
    "Contrato_CalculoExtensaoCod": ""
  }
})

function run(corpoTitulos) {
	let msg=""
	try{
		let parcelas = JSON.parse(corpoTitulos).parcela
        
		if(Array.isArray(parcelas)){
			parcelas.forEach((parcela,index)=>{
				msg+=(index+1)+" - "+parcela.MesVencto+"/"+parcela.AnoVencto+"\n"
			})
		}else{
            
			msg+="1 - "+parcelas.MesVencto+"/"+parcelas.AnoVencto+"\n"
		}
	} catch(e){
		return "não foram encontrados titulos em aberto"
	}
	return msg
}

function run2(input, corpoTitulos) {
	try{
		corpoTitulos = JSON.parse(corpoTitulos)

		let parcelas = corpoTitulos.parcela
		
		if(!Array.isArray(parcelas)){
			parcelas = [parcelas]
		}
		
		input = parseInt(input)-1

		if(input >= 0 && input < parcelas.length)
        {
			return JSON.stringify(parcelas[input])
		}
        else
        {
			return "invalido"
		}
	
	} catch(e) {
		return "invalido"
	}
}

test("testA",()=>{
    expect(run(corpoTitulos)).toBe("1 - 09/2023\n")
})

test("testB",()=>{
    expect(run2("1",corpoTitulos)).toBe(JSON.stringify(JSON.parse(corpoTitulos).parcela))
})