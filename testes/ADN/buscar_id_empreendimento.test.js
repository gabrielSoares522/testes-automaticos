function run(listaEmpreendimentos,empreendimento, cidade){
    listaEmpreendimentos = JSON.parse(listaEmpreendimentos)
    let idEmpreendimento = "-1"
    empreendimento = empreendimento.toLowerCase()
    cidade = cidade.toLowerCase()
    empreendimento = empreendimento.replace("residence","").replace("residencial","")
    empreendimento = empreendimento.trim()
    listaEmpreendimentos.forEach(item => {
        let itemNome = item.nome.toLowerCase()
        let itemCidade = item.cidade.toLowerCase()

        if(itemNome == empreendimento && itemCidade == cidade)
        {
            idEmpreendimento = item.idempreendimento
        }
    });

    return idEmpreendimento
}

const listaEmpreendimentos = JSON.stringify([
    {
        "idempreendimento": "2",
        "nome": "Parque das Oliveiras",
        "cidade": "São Carlos",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://adn.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20220601094524_62975f6457135.jpg",
        "foto_listagem": null,
        "foto": "https://adn.cvcrm.com.br/api/get/imagens/empreendimentos_foto/x/x/20220601094524_62975f64a5c71.jpg",
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "3",
        "nome": "Vila Das Orquídeas",
        "cidade": "São Carlos",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": "https://adn.cvcrm.com.br/api/get/imagens/empreendimentos_logo/x/x/20220601094606_62975f8e4b9f1.jpg",
        "foto_listagem": null,
        "foto": "https://adn.cvcrm.com.br/api/get/imagens/empreendimentos_foto/x/x/20220601094606_62975f8edf620.jpg",
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "4",
        "nome": "Lisboa",
        "cidade": "São Paulo",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": null,
        "foto_listagem": null,
        "foto": null,
        "app_exibir": "S",
        "app_cor_background": null
    },
    {
        "idempreendimento": "5",
        "nome": "Flor de Liz",
        "cidade": "São Paulo",
        "estado": "São Paulo",
        "sigla": "SP",
        "logo": null,
        "foto_listagem": null,
        "foto": null,
        "app_exibir": "S",
        "app_cor_background": null
    }
])

test("retornar id do empreendimento selecionado", ()=> {
    let resultados = [
        run(listaEmpreendimentos,"Parque das Oliveiras","São Carlos"),
        run(listaEmpreendimentos,"Vila Das Orquídeas","São Carlos"),
        run(listaEmpreendimentos,"Lisboa Residence","São Paulo"),
        run(listaEmpreendimentos,"Flor de Liz Residencial","São Paulo")
    ]

    let experado = ["2","3","4","5"]
    for(let i = 0;i<resultados.length;i++){
        expect(resultados[i]).toBe(experado[i])
    }
})

test("retornar -1 com empreendimento e cidade invalido", ()=> {
    let resultado = run(listaEmpreendimentos,"Flor de Liz residence","Salvador")

    expect(resultado).toBe("-1")
})