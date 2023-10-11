function run(option, imoveis,tamPagina, numeroPagina) {
    imoveis = JSON.parse(imoveis)

    if(numeroPagina == "undefined" || numeroPagina == undefined || numeroPagina == null || numeroPagina == "") {
        numeroPagina = 0
    }
    else{
        try{
            numeroPagina = parseInt(numeroPagina)
        } catch (ex){
            numeroPagina = 0
        }
    }

    return JSON.stringify(imoveis[(tamPagina*numeroPagina)+(option - 1)]);
}

const ex = {
    "headers":{},
    "method":"POST",
    "body":{
        "Key":"B3nz5JfOeHI1",
        "TagAtalho":"",
        "CampanhaKey":"",
        "ProdutoKey":"", 
        "CanalKey":"-oFWc7uXxkk1", 
        "PoliticaPrivacidadeKey":"", 
        "Midia":"strmidia=BlipChatBot", 
        "Peca":"strmidia=BlipChatBot&strpeca=BotWhatsApp", 
        "UsuarioEmail":"", 
        "GrupoPeca":"",
        "CampanhaPeca":"",
        "PessoaNome":"gabriel soares",
        "PessoaSexo":"",
        "ValidarEmail":"false",
        "PessoaEmail":"",
        "ValidarTelefone":"false",
        "PessoaTelefones":[
            {
                "Tipo":"CELULAR",
                "DDD":"13",
                "Numero":"999999999",
                "Ramal":null
            }
        ],
        "Observacoes":"Resumo dados informados pelo Cliente: Nome Cliente: gabriel soares Email Cliente: null Telefone Cliente: (13)999999999 Empredimento de Interesse: empreendimentoEspecifico Metragem de Interesse: 40 metros quadrado Cliente: Olá!Bot: 1. Deseja saber mais sobre o breve lançamento THINK Tanabi? 2. Outras informações Cliente: 1/Bot: Por favor, informe seu nome completo?Cliente: gabriel soaresBot: Por favor, qual é o seu e-mail? Cliente: gabriel.teste@gmail.com Bot: Por favor, qual é o seu telefone com ddd? Cliente: null Bot: gabriel soares, possui interesse em algum empreendimento THINK em específico? (escolha o número) Cliente: sim. Opção inválida! Bot: Ótimo! Nesse caso me diz qual empreendimento é de seu interesse? Cliente: empreendimento teste Bot: Ops! No momento ainda não tenho informações suficientes para te passar, mas vou te encaminhar para um dos meus colegas e eles te ajudaram, ta ok? Mas antes vou precisar que me informe, só mais alguns dados, ta bem? Bot: Em qual metragem você tem interesse? Cliente: 40 metros quadrado Bot: Pra finalizar, por qual meio você tomou conhecimento sobre nossos empreendimentos? Cliente: 1. Indicação Bot: De uma nota de 1 a 5, qual é a sua avaliação em relação a nossa conversa? Cliente: 5",
        "KeyExterno":"",
        "UsarKeyExterno":"false",
        "KeyIntegradora":"A235C36E-83EC-4213-8919-EF768990C0AF", 
        "KeyAgencia":"524ee968-6678-4a66-befc-4f83c8fa223e",
        "ListHashTag":["#", ""]
    }
}
const imoveis = require("./imoveis.json")

test("Teste 0", () => {
    var option = 1
    var esperado = JSON.stringify(imoveis[0])
    var resposta = run(option, JSON.stringify(imoveis), 10, 0)
    expect(resposta).toBe(esperado)
})

test("Teste 1", () => {
    var option = 1
    var esperado = JSON.stringify(imoveis[20])
    var resposta = run(option, JSON.stringify(imoveis), 10, 2)
    expect(resposta).toBe(esperado)
})

test("Teste 2", () => {
    var option = 4
    var esperado = JSON.stringify(imoveis[43])
    var resposta = run(option, JSON.stringify(imoveis), 10, 4)
    expect(resposta).toBe(esperado)
})