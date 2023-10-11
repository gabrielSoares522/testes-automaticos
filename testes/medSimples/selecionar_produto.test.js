function run(input,listaProdutos) {
    listaProdutos = JSON.parse(listaProdutos)
    
    input = input.trim()
    
    let resposta = "invalido"
    
    listaProdutos.forEach((item,index) =>{
        if((index+1).toString() == input || input.trim() == item.nome.substring(0,19).trim()){
            resposta = item
        }
    })

    return resposta
}
test("::",()=>{
    expect(run("Pronto Atendimento",JSON.stringify([
        {
            "nome": "Teste consulta",
            "valor": 6,
            "linkImagem": "https://scontent-gru2-1.xx.fbcdn.net/v/t45.5328-4/332751675_4769858786471565_626102696665797591_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=RQNmBEx659IAX_5N4di&_nc_ht=scontent-gru2-1.xx&edm=AO-O_bEEAAAA&oh=00_AfB8c8sL3JguyDa1xag-6FwO6uYsZ8fCClv-luYrG0Lmuw&oe=64614715",
            "linkSaberMais": null,
            "retailer_id": null
        },
        {
            "nome": "Pronto Atendimento 24/7",
            "valor": 89,
            "linkImagem": "https://scontent-gru2-1.xx.fbcdn.net/v/t45.5328-4/332751675_4769858786471565_626102696665797591_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=RQNmBEx659IAX_5N4di&_nc_ht=scontent-gru2-1.xx&edm=AO-O_bEEAAAA&oh=00_AfB8c8sL3JguyDa1xag-6FwO6uYsZ8fCClv-luYrG0Lmuw&oe=64614715",
            "linkSaberMais": null,
            "retailer_id": null
        }
    ]))).toStrictEqual(
        {
            "nome": "Pronto Atendimento 24/7",
            "valor": 89,
            "linkImagem": "https://scontent-gru2-1.xx.fbcdn.net/v/t45.5328-4/332751675_4769858786471565_626102696665797591_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=c48759&_nc_ohc=RQNmBEx659IAX_5N4di&_nc_ht=scontent-gru2-1.xx&edm=AO-O_bEEAAAA&oh=00_AfB8c8sL3JguyDa1xag-6FwO6uYsZ8fCClv-luYrG0Lmuw&oe=64614715",
            "linkSaberMais": null,
            "retailer_id": null
        })
})