
let resultado = {"type":"application/vnd.lime.contact+json",
"resource":{
    "name":"gabriel teste",
    "group":"",
    "lastMessageDate":"2023-03-06T13:39:24.810Z",
    "lastUpdateDate":"2023-03-06T16:39:55.627Z",
    "identity":"5513998070619@wa.gw.msging.net",
    "email":"gabriel.teste@teste.com.br",
    "phoneNumber":"(99) 99999-9999",
    "extras":{
        "origem":"não definido",
        "plataforma":"não definido",
        "doc":"CPF",
        "cidade":"belo horizonte",
        "tipo de curso":"Cursos online",
        "curso desejado":"Bentley Topograph",
        "curso adquirido":"curso teste",
        "tipo":"Pessoa Física",
        "lead":"Sim",
        "assunto":"Nossas Promoções",
        "fila":"atendente"},"source":"WhatsApp","taxDocument":"222.333.444-55"},"method":"get","status":"success","id":"ad0c4a40-a8ea-4a90-b1e9-3f41e09c3162","from":"postmaster@crm.msging.net/#iris-hosted-5","to":"cpetecnologiaroteador@msging.net/!iris-hosted-5-twem56ym","metadata":{"#command.uri":"lime://cpetecnologiaroteador@msging.net/contacts/5513998070619@wa.gw.msging.net","uber-trace-id":"1ea144b0f2992d85%3A867fd5ef0f7750f3%3A1ea144b0f2992d85%3A1"}}

function run(statusContato,corpoContato){
    if(statusContato == "200"){
        corpoContato = JSON.parse(corpoContato)
        return JSON.stringify({
            "nome":corpoContato.resource.name,
            "telefone":corpoContato.resource.phoneNumber,
            "email":corpoContato.resource.email,
            "origem":corpoContato.resource.extras.origem,
            "plataforma":corpoContato.resource.extras.plataforma,
            "assunto": corpoContato.resource.extras.assunto
        })
    }
}

test("retornar dados do contato",()=>{
    expect(run("200",JSON.stringify(resultado))).toBe(JSON.stringify({"nome":"gabriel teste",
    "telefone": "(99) 99999-9999",
    "email":"gabriel.teste@teste.com.br",
    "origem":"não definido",
    "plataforma":"não definido",
    "assunto": "Nossas Promoções"}))
})