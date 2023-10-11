function run(input) {
    input = input.toLowerCase()
    input = input.trim()

    input = input.split(" ")
    
    if(input.includes("sim") == true){
        return "sim"
    }
    else{
         return "não"
    }
}

test("verifincando o retorno correto para a resposta",()=>
{
    expect(run("Sim")).toBe("sim")
    expect(run("Não")).toBe("não")
})