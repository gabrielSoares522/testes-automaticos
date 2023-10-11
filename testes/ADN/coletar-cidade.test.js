function run(corpo,status) {
    if(status == "200"){

        corpo = JSON.parse(corpo)
        if(Array.isArray(corpo)==true){
            let tam = corpo.length

            if (tam == 0) {
                return false
            } else {
                return true
            }
        }else{
            if(corpo.id != undefined){
                return true
            }
        }
    }

    return true
}

test("retornar não existe",()=>{
    let inputCorpo=JSON.stringify([])
    let inputStatus = "200"
    let inputCidade = "cidade errada"
    let result = run(inputCorpo,inputStatus,inputCidade)
    let expected = false

    expect(result).toBe(expected)
})

test("guarujá 500",()=>{
    let inputCorpo=JSON.stringify({"error":"time out"})
    let inputStatus = "500"
    let inputCidade = "guarujá"
    let result = run(inputCorpo,inputStatus,inputCidade)
    let expected = true

    expect(result).toBe(expected)
})

test("guarujá 200",()=>{
    let inputCorpo=JSON.stringify({
        "id": 3518701,
        "nome": "Guarujá",
        "microrregiao": {
            "id": 35063,
            "nome": "Santos",
            "mesorregiao": {
                "id": 3515,
                "nome": "Metropolitana de São Paulo",
                "UF": {
                    "id": 35,
                    "sigla": "SP",
                    "nome": "São Paulo",
                    "regiao": {
                        "id": 3,
                        "sigla": "SE",
                        "nome": "Sudeste"
                    }
                }
            }
        },
        "regiao-imediata": {
            "id": 350002,
            "nome": "Santos",
            "regiao-intermediaria": {
                "id": 3501,
                "nome": "São Paulo",
                "UF": {
                    "id": 35,
                    "sigla": "SP",
                    "nome": "São Paulo",
                    "regiao": {
                        "id": 3,
                        "sigla": "SE",
                        "nome": "Sudeste"
                    }
                }
            }
        }
    })
    let inputStatus = "200"
    let inputCidade = "guarujá"
    let result = run(inputCorpo,inputStatus,inputCidade)
    let expected = true

    expect(result).toBe(expected)
})

test("guarujá 200",()=>{
    let inputCorpo=JSON.stringify([
        {
            "id": 2413003,
            "nome": "São Vicente",
            "microrregiao": {
                "id": 24010,
                "nome": "Serra de Santana",
                "mesorregiao": {
                    "id": 2402,
                    "nome": "Central Potiguar",
                    "UF": {
                        "id": 24,
                        "sigla": "RN",
                        "nome": "Rio Grande do Norte",
                        "regiao": {
                            "id": 2,
                            "sigla": "NE",
                            "nome": "Nordeste"
                        }
                    }
                }
            },
            "regiao-imediata": {
                "id": 240008,
                "nome": "Currais Novos",
                "regiao-intermediaria": {
                    "id": 2402,
                    "nome": "Caicó",
                    "UF": {
                        "id": 24,
                        "sigla": "RN",
                        "nome": "Rio Grande do Norte",
                        "regiao": {
                            "id": 2,
                            "sigla": "NE",
                            "nome": "Nordeste"
                        }
                    }
                }
            }
        },
        {
            "id": 3551009,
            "nome": "São Vicente",
            "microrregiao": {
                "id": 35063,
                "nome": "Santos",
                "mesorregiao": {
                    "id": 3515,
                    "nome": "Metropolitana de São Paulo",
                    "UF": {
                        "id": 35,
                        "sigla": "SP",
                        "nome": "São Paulo",
                        "regiao": {
                            "id": 3,
                            "sigla": "SE",
                            "nome": "Sudeste"
                        }
                    }
                }
            },
            "regiao-imediata": {
                "id": 350002,
                "nome": "Santos",
                "regiao-intermediaria": {
                    "id": 3501,
                    "nome": "São Paulo",
                    "UF": {
                        "id": 35,
                        "sigla": "SP",
                        "nome": "São Paulo",
                        "regiao": {
                            "id": 3,
                            "sigla": "SE",
                            "nome": "Sudeste"
                        }
                    }
                }
            }
        }
    ])
    let inputStatus = "200"
    let inputCidade = "guarujá"
    let result = run(inputCorpo,inputStatus,inputCidade)
    let expected = true

    expect(result).toBe(expected)
})