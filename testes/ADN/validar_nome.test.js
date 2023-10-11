function run(input) {
    input = input.trim()
    return ((input.split(" ")).length > 1)
}

test("verficar se o nome valido retorna true",()=>{
    let nomes = ["Gabriel soares", "Gabriel c. soares   " ]
    for(let i = 0;i<nomes.length;i++){
        expect(i+"-"+run(nomes[i])).toBe(i+"-"+true)
    }
})

test("verficar se o nome invalido retorna false",()=>{
    let nomes = ["Gabriel", "Gabriel   " ]
    for(let i = 0;i<nomes.length;i++){
        expect(run(nomes[i])).toBe(false)
    }
})