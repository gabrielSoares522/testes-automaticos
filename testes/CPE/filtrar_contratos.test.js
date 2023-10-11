
function run(response) {
    response = JSON.parse(response);

    let contratos = response.contratos.contratos;

    let contratosValidos = [];

    for (let i in contratos){
        let codigo = contratos[i].codigo.split(".")[0];
        if(codigo != "PAL"){
            continue;
        }

        contratosValidos.push(contratos[i]);

    }

    return JSON.stringify(contratosValidos);
}

describe("filtrando contratos",()=>{

    test("retornando sem os contratos com a m lar",()=>{

        const contratos = {
            "validacao":"OK",
            "nome":"T & M EMPREENDIMENTOS E PARTICIPACOES LTDA ME",
            "cpf":"13.008.764/0001-75",
            "rg":"",
            "telefone":"(0xx85)9111-8432",
            "email":"thiagombbarroso@gmail.com",
            "endereco":"Rua CATAO MAMEDE,490-",
            "logradouro":"Rua CATAO MAMEDE",
            "numero":"490",
            "complemento":"",
            "pais":"Brasil",
            "bairro":"ALDEOTA",
            "cidade":"FORTALEZA",
            "uf":"CE",
            "cep":"60.140-110",
            "contratos":{
               "contratos":[
                  {
                     "nome":"Centurion Business Center",
                     "endereco":{
                        "logradouro":"Avenida Desmbargador Moreira, 760",
                        "bairro":"Meireles",
                        "cep":"60170000",
                        "cidade":"Fortaleza",
                        "uf":"CE"
                     },
                     "unidade":"Salas Comerciais, Primeiro pavimento, Loja Loja -01",
                     "codigo":"CEN.01.0001",
                     "contrato":"0507",
                     "edificacao":"Salas Comerciais",
                     "unidadeIdentificacao":"01",
                     "dataVenda":"25/07/2018",
                     "dataBase":"25/07/2018",
                     "valorVenda":"1.127.677,50",
                     "status":"LIQUIDADO",
                     "clientes":{
                        "clientes":[
                           {
                              "nome":"T & M EMPREENDIMENTOS E PARTICIPACOES LTDA ME",
                              "cpf":"13.008.764/0001-75",
                              "rg":"",
                              "telefone":"thiagombbarroso@gmail.com",
                              "email":"",
                              "endereco":"Rua CATAO MAMEDE,490-",
                              "logradouro":"Rua CATAO MAMEDE",
                              "numero":"490",
                              "complemento":"",
                              "pais":"Brasil",
                              "bairro":"ALDEOTA",
                              "cidade":"FORTALEZA",
                              "uf":"CE",
                              "cep":"60.140-110",
                              "cliente_percentual":"100"
                           }
                        ]
                     }
                  },
                  {
                     "nome":"Palladium Business Center",
                     "endereco":{
                        "logradouro":"Rua Pereira Valente, 578",
                        "bairro":"Meireles",
                        "cep":"60160250",
                        "cidade":"Fortaleza",
                        "uf":"CE"
                     },
                     "unidade":"Salas Comerciais, Decimo quarto pavimento, Sala Comercial 1405",
                     "codigo":"PAL.01.0001",
                     "contrato":"0009",
                     "edificacao":"Salas Comerciais",
                     "unidadeIdentificacao":"1405",
                     "dataVenda":"18/06/2014",
                     "dataBase":"18/06/2014",
                     "valorVenda":"401.948,16",
                     "status":"RESCINDIDO",
                     "clientes":{
                        "clientes":[
                           {
                              "nome":"T & M EMPREENDIMENTOS E PARTICIPACOES LTDA ME",
                              "cpf":"13.008.764/0001-75",
                              "rg":"",
                              "telefone":"thiagombbarroso@gmail.com",
                              "email":"",
                              "endereco":"Rua CATAO MAMEDE,490-",
                              "logradouro":"Rua CATAO MAMEDE",
                              "numero":"490",
                              "complemento":"",
                              "pais":"Brasil",
                              "bairro":"ALDEOTA",
                              "cidade":"FORTALEZA",
                              "uf":"CE",
                              "cep":"60.140-110",
                              "cliente_percentual":"100"
                           }
                        ]
                     }
                  },
                  {
                     "nome":"Palladium Business Center",
                     "endereco":{
                        "logradouro":"Rua Pereira Valente, 578",
                        "bairro":"Meireles",
                        "cep":"60160250",
                        "cidade":"Fortaleza",
                        "uf":"CE"
                     },
                     "unidade":"Vagas de Garagem, Primeiro subsolo, Garagens 55",
                     "codigo":"PAL.01.0001",
                     "contrato":"0083",
                     "edificacao":"Vagas de Garagem",
                     "unidadeIdentificacao":"55",
                     "dataVenda":"18/06/2014",
                     "dataBase":"18/06/2014",
                     "valorVenda":"28.800,00",
                     "status":"RESCINDIDO",
                     "clientes":{
                        "clientes":[
                           {
                              "nome":"T & M EMPREENDIMENTOS E PARTICIPACOES LTDA ME",
                              "cpf":"13.008.764/0001-75",
                              "rg":"",
                              "telefone":"thiagombbarroso@gmail.com",
                              "email":"",
                              "endereco":"Rua CATAO MAMEDE,490-",
                              "logradouro":"Rua CATAO MAMEDE",
                              "numero":"490",
                              "complemento":"",
                              "pais":"Brasil",
                              "bairro":"ALDEOTA",
                              "cidade":"FORTALEZA",
                              "uf":"CE",
                              "cep":"60.140-110",
                              "cliente_percentual":"50"
                           },
                           {
                              "nome":"THIAGO MONTENEGRO BRAGA BARROSO",
                              "cpf":"004.529.643-00",
                              "rg":"96002399711 -",
                              "telefone":"(0xx85)3067-8432",
                              "email":"",
                              "endereco":"Rua EDUARDO GARCIA,920-AP 502",
                              "logradouro":"Rua EDUARDO GARCIA",
                              "numero":"920",
                              "complemento":"AP 502",
                              "pais":"Brasil",
                              "bairro":"ALDEOTA",
                              "cidade":"FORTALEZA",
                              "uf":"CE",
                              "cep":"60.150-100",
                              "cliente_percentual":"50"
                           }
                        ]
                     }
                  }
               ]
            }
         }

        const contratosValidos = [
            {
               "nome":"Palladium Business Center",
               "endereco":{
                  "logradouro":"Rua Pereira Valente, 578",
                  "bairro":"Meireles",
                  "cep":"60160250",
                  "cidade":"Fortaleza",
                  "uf":"CE"
               },
               "unidade":"Salas Comerciais, Decimo quarto pavimento, Sala Comercial 1405",
               "codigo":"PAL.01.0001",
               "contrato":"0009",
               "edificacao":"Salas Comerciais",
               "unidadeIdentificacao":"1405",
               "dataVenda":"18/06/2014",
               "dataBase":"18/06/2014",
               "valorVenda":"401.948,16",
               "status":"RESCINDIDO",
               "clientes":{
                  "clientes":[
                     {
                        "nome":"T & M EMPREENDIMENTOS E PARTICIPACOES LTDA ME",
                        "cpf":"13.008.764/0001-75",
                        "rg":"",
                        "telefone":"thiagombbarroso@gmail.com",
                        "email":"",
                        "endereco":"Rua CATAO MAMEDE,490-",
                        "logradouro":"Rua CATAO MAMEDE",
                        "numero":"490",
                        "complemento":"",
                        "pais":"Brasil",
                        "bairro":"ALDEOTA",
                        "cidade":"FORTALEZA",
                        "uf":"CE",
                        "cep":"60.140-110",
                        "cliente_percentual":"100"
                     }
                  ]
               }
            },
            {
               "nome":"Palladium Business Center",
               "endereco":{
                  "logradouro":"Rua Pereira Valente, 578",
                  "bairro":"Meireles",
                  "cep":"60160250",
                  "cidade":"Fortaleza",
                  "uf":"CE"
               },
               "unidade":"Vagas de Garagem, Primeiro subsolo, Garagens 55",
               "codigo":"PAL.01.0001",
               "contrato":"0083",
               "edificacao":"Vagas de Garagem",
               "unidadeIdentificacao":"55",
               "dataVenda":"18/06/2014",
               "dataBase":"18/06/2014",
               "valorVenda":"28.800,00",
               "status":"RESCINDIDO",
               "clientes":{
                  "clientes":[
                     {
                        "nome":"T & M EMPREENDIMENTOS E PARTICIPACOES LTDA ME",
                        "cpf":"13.008.764/0001-75",
                        "rg":"",
                        "telefone":"thiagombbarroso@gmail.com",
                        "email":"",
                        "endereco":"Rua CATAO MAMEDE,490-",
                        "logradouro":"Rua CATAO MAMEDE",
                        "numero":"490",
                        "complemento":"",
                        "pais":"Brasil",
                        "bairro":"ALDEOTA",
                        "cidade":"FORTALEZA",
                        "uf":"CE",
                        "cep":"60.140-110",
                        "cliente_percentual":"50"
                     },
                     {
                        "nome":"THIAGO MONTENEGRO BRAGA BARROSO",
                        "cpf":"004.529.643-00",
                        "rg":"96002399711 -",
                        "telefone":"(0xx85)3067-8432",
                        "email":"",
                        "endereco":"Rua EDUARDO GARCIA,920-AP 502",
                        "logradouro":"Rua EDUARDO GARCIA",
                        "numero":"920",
                        "complemento":"AP 502",
                        "pais":"Brasil",
                        "bairro":"ALDEOTA",
                        "cidade":"FORTALEZA",
                        "uf":"CE",
                        "cep":"60.150-100",
                        "cliente_percentual":"50"
                     }
                  ]
               }
            }
         ]
        expect(run(JSON.stringify(contratos))).toBe(JSON.stringify(contratosValidos))        
    })
})
