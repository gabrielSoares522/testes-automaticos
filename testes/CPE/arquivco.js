function run(canal, produtosAdicionais) {
	produtosAdicionais = JSON.parse(produtosAdicionais)
	let menu
	switch(canal){
		case "WhatsApp":

			menu={
   				"recipient_type":"individual",
   				"type":"interactive",
   				"interactive":{
      				"type": "list",
      				"body":{
         				"text":"Nós temos ofertas que você também pode adquirir com preço especial."
      				},
      				"action":{
						"button":"Ver opções",
						"sections":[
							{
								"title":"Selecione",
								"rows":[]
							}
						]
					}
   				}
			}

			produtosAdicionais.forEach((item,index) => {
				menu.interactive.action.sections[0].rows.push({
					"id": "ID "+(index+1)+".0",
					"title": item.nome,
					"description": "Valor "+ formatoMonetario(item.valor)
				})
			})
			menu.interactive.action.sections[0].rows.push({
				"id":"ID 0.0",
				"title":"Prosseguir sem adicional",
				"description":""
			})
		default:
			menu = "Nós temos ofertas que você também pode adquirir com preço especial.\n\n"
			menu += listarAdicionais(produtosAdicionais)+"0 - Prosseguir sem produto adicional"
	}

	return menu

}
function formatoMonetario(valor){
	return `R$ ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
}

function listarAdicionais(produtosAdicionais) {
    let texto = ""
    produtosAdicionais.forEach((item,index) => {
        texto +=`${(index+1)} - ${item.nome} - Valor ${formatoMonetario(item.valor)}\n`
    })
    return texto
}

console.log(run("WhatsApp",JSON.stringify([
    {
        "nome": "MedSimples Benefícios",
        "valor": 9.9
    }
])))