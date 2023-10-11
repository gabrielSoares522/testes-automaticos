function run(input) {
    input = input.trim()
    if(isNaN(input) == false && input.indexOf(".") == -1){
        let nota = parseInt(input)
        if(nota >= 1 && nota <= 5){
            return true
        }
    }

    return false
}

test("notas validas retornam true",()=>{
    let resultados =[
        run("1"),
        run("2"),
        run("3"),
        run("4"),
        run("5")
    ]

    for(let index = 0;index < resultados.length;index++){
        expect(resultados[index]).toBe(true)
    }
})


test("notas validas retornam true",()=>{
    let resultados =[
        run("0"),
        run(".5"),
        run("1.5"),
        run("6"),
        run("4,6"),
        run("3d"),
        run("3 texto")
    ]

    for(let index = 0;index < resultados.length;index++){
        expect(resultados[index]).toBe(false)
    }
})