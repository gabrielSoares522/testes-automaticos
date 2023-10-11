function run(compradores, compradorSelecionado) {
    if(compradorSelecionado!=undefined && compradores !=null){
        
        compradores = JSON.parse(compradores)
        if(compradores.indexOf(compradorSelecionado)>=0){
            return true
        }
    }
    return false
}
test("a",()=>{
    let resultado = run(JSON.stringify(["Maira Hernandes","Marcia Brassica","Paulo Pereira"]),undefined)
    expect(resultado).toBe(false)
    resultado = run(JSON.stringify(["Maira Hernandes","Marcia Brassica","Paulo Pereira"]),"Marcia Brassica")
    expect(resultado).toBe(true)
})