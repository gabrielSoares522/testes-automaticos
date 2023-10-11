function run(input) {
    
    let padrao = new RegExp("^([a-z0-9|.|_|-]+)@([a-z0-9|.|_]+)$")
    return input.match(padrao)!=null
}
function formata(cidade) {
    cudade = new String(cidade)
    cidade = cidade.toLowerCase()
    cidade = cidade.trim()
    cidade = cidade.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

    cidade = cidade.replace(/ /g, "-")
    //str.replace(new RegExp(escapeRegExp("//g"), 'g'), replace)
    return cidade
}

function retornarVencimentoDiaTexto(prazo = 1){
    var today = new Date();
    var vencimento = new Date(today.getFullYear(), today.getMonth(), today.getDate()+prazo)
    
    return vencimento.toISOString().split("T")[0]
}
test("retornar true no input do e-mail valido",()=>{
    
    jest.useFakeTimers().setSystemTime(new Date("2023-05-05T13:15:00.000Z"));
    expect(retornarVencimentoDiaTexto(0)).toBe('2023-05-05')
    expect(run("gabriel.soares@izysoft.com.br")).toBe(true)
    expect(run("gabriel.soares@izysoft.com.né")).toBe(false)
    expect(formata("Santana de Parnaíba")).toBe("santana-de-parnaiba")
})