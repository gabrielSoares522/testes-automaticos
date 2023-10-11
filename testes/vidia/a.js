function run(nome, telefone,email) {
    // cirurgia
    // titularidadeCirurgia -enviados depois
    var json;
    let origem = "Whatsapp - chatbot"
    var numero = telefone.split('');
    
    //numero.unshift('+55');
    
    numero = numero.join('');
    
    if(nome.search(" ") != -1){
        var nomeTratado = nome.split(" ")

        json = {
            "properties": {
                "firstname": nomeTratado[0],
                "lastname": nomeTratado[1],
                "phone": numero,
                "origem_do_lead": origem,
                "email": email
            }
        }
    } else {
        json = {
            "properties": {
                "firstname": nome,
                "phone": numero,
                "origem_do_lead": origem,
                "email": email,
            }
        }

    }
    
    return json;
}
test("verificar ",()=>{
    expect(run("gabriel","+44333124444","etes@gmail.com"))
    .toBe({
        "properties": {
            "firstname": "gabriel",
            "phone": "+44333124444",
            "origem_do_lead": "Whatsapp - chatbot",
            "email": "etes@gmail.com",
        }
    })
})