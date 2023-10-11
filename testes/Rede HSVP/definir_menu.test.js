function run(canal) {
    let pergunta = "Obrigado pelas informações.\n\nvocê gostaria de falar com qual unidade de nossa rede?\n\nPor favor, escolha uma das opções:"
    let respostas = ["Belo Oriente","Ipanema","voltar"]

    let menu = ""
    if(canal == "Instagram"){
        menu = pergunta+"\n\n"

        for(let index = 1; index <= respostas.length; index++){
            menu += index + ". " + respostas[index-1] + "\n"
        }
    }else{
        menu = '{"scope":"immediate","text":"'+pergunta+'","options":['

        for(let index = 0; index < respostas.length; index++){
            menu = menu+ '{"text":"'+respostas[index]+'", "index": '+index+'}'
            if(index < respostas.length-1){
                menu = menu+ ','
            }
                
        }

        menu+=']}'
    }

    return menu
}

test("a",()=>{
    expect(run()).toBe('{"scope":"immediate","text":"Obrigado pelas informações.\n\nvocê gostaria de falar com qual unidade de nossa rede?\n\nPor favor, escolha uma das opções:","options":[{"text":"Belo Oriente", "index": 0},{"text":"Ipanema", "index": 1},{"text":"voltar", "index": 2}]}')
})