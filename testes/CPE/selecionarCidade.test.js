function run(input, cidades) {
    let selecionado = "invalido"
    input = input.toLowerCase()
    cidades = JSON.parse(cidades)
    if(cidades != null){
        cidades.forEach((cidade) =>{
            cidade = cidade.toLowerCase()

            if(input == cidade){
                selecionado = cidade
            }
        })
    }
    return selecionado
}

test("b",()=>{
    expect(run("Belo Horizonte",JSON.stringify(["Belo Horizonte","Outra Cidade"]))).toBe("belo horizonte")
})