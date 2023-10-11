function run(nome, email, telefone, statusConta, idConta) {
    let { primeiroNome, sobreNome } = decomporNome(nome)
    
    if(statusConta == "201"){
        return {
            "FirstName": primeiroNome,
            "LastName": sobreNome,
            "Email": email,
            "Phone": telefone,
            "AccountId": idConta
        }
    }
}

function decomporNome(nome){
    let primeiroNome=""
    let sobreNome = ""
    nome = nome.trim()
    if(nome.search(" ")!=-1){
        nome = nome.split(" ")
        primeiroNome = nome[0]
        nome.shift()
        sobreNome = nome.join(" ")
    }else{
        primeiroNome = nome
    }
    return { primeiroNome, sobreNome }
}
test("a",()=>{
    expect(run("gabriel de carvalho","email","telefone","201","id")).toStrictEqual({
        "FirstName": "gabriel",
        "LastName": "de carvalho",
        "Email": "email",
        "Phone": "telefone",
        "AccountId": "id"
    })
})