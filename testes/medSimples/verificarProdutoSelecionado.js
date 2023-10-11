function run(input,listaProdutos) {
    listaProdutos = JSON.parse(listaProdutos)
    input = input.toLowerCase()
    input = input.trim()
    
    let resposta = "invalido"

    listaProdutos.forEach((item,index) =>{
        if((index+1).toString() == input || input == item.nome){
            resposta = item
        }
    })
    return resposta
}
