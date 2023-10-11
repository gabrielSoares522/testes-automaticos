let santos = {
    "id": 3548500,
    "nome": "Santos",
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

let sao_vicente = [
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
]
let Fiar_me_ia = []

function run(corpo,status) {
    if(status == "200"){

        corpo = JSON.parse(corpo)
        if(Array.isArray(corpo)==true){
            let tam = corpo.length

            if (tam == 0) {
                return "não existe"
            } else {
                if (tam == 1) {
                    return corpo[0].id
                } else {
                    return "multiplas"
                }
            }
        }else{
            if(corpo.id != undefined){
                return corpo.id
            }
        }
    }

    return "não existe"
}

function filtrarPorEstado(corpo,UF,codigoCidade) {
    UF= UF.toUpperCase()
    if(codigoCidade == "multiplas"){
        corpo = JSON.parse(corpo)
        
        corpo.forEach((cidade)=>{
                if(cidade.microrregiao.mesorregiao.UF.sigla == UF){
                    codigoCidade = cidade.id
                }
            })
    }
    
    return codigoCidade
}

test("codigo cidade Fiar_me_ia", () =>{
    let experado = "não existe"
    let input = Fiar_me_ia
    expect(run(JSON.stringify(input),"200")).toBe(experado)
})

test("codigo cidade santos", () =>{
    let experado = 3548500
    let input = santos
    expect(run(JSON.stringify(input),"200")).toBe(experado)

    expect(filtrarPorEstado(
        JSON.stringify(input),
        "SP",
        run(JSON.stringify(input),"200")
    )).toBe(3548500)
})

test("codigo cidade sao vicente", () =>{
    let experado = "multiplas"
    let input = sao_vicente
    expect(run(JSON.stringify(input),"200")).toBe(experado)

    expect(filtrarPorEstado(
        JSON.stringify(input),
        "sp",
        run(JSON.stringify(input),"200")
    )).toBe(3551009)
})

test("sigla estado incorreto", () =>{
    let experado = "multiplas"
    let input = sao_vicente
    expect(filtrarPorEstado(
        JSON.stringify(input),
        "sss",
        run(JSON.stringify(input),"200")
    )).toBe(experado)
})
test("api do ibge esta fora do ar", () =>{
    let experado = "não existe"
    
    expect(filtrarPorEstado(
        JSON.stringify({}),
        "SP",
        "não existe"
    )).toBe(experado)
})
