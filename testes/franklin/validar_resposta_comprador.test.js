function run(input,compradores) {
    if(isNaN(input) == false){
        compradores = JSON.parse(compradores)
        input = parseInt(input)
        input-=1

        if(input<0){
            return "invalido"
        }

        if(compradores.length == input){
            return "voltar"
        }
        if(input < compradores.length){
            return compradores[input]
        }
    }
    return "invalido"
}

test("c",()=>{
    let resultados = [run("1",JSON.stringify(["Maira Hernandes","Marcia Brassica","Paulo Pereira"])),
    run("2",JSON.stringify(["Maira Hernandes","Marcia Brassica","Paulo Pereira"])),
    run("3",JSON.stringify(["Maira Hernandes","Marcia Brassica","Paulo Pereira"])),
    run("4",JSON.stringify(["Maira Hernandes","Marcia Brassica","Paulo Pereira"])),
    run("5",JSON.stringify(["Maira Hernandes","Marcia Brassica","Paulo Pereira"]))]

    expect(resultados[0]).toBe("Maira Hernandes")
    expect(resultados[1]).toBe("Marcia Brassica")
    expect(resultados[2]).toBe("Paulo Pereira")
    expect(resultados[3]).toBe("voltar")
    expect(resultados[4]).toBe("invalido")
})