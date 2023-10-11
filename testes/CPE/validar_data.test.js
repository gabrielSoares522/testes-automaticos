function validarData(input){
    let data = coletarDataInformada(input)
    if(data == null){
        return "invalido"
    }
    else{
        return data
    }
}
function converterDataParaFormatoISO(data){
    let dataFormatada = data.split("/").reverse().join("-")
    return dataFormatada
}
function coletarDataInformada(input){
    let data= input.match(/(\d{2})\/(\d{2})\/(\d{4})/)

    if(data.length >0){

        let dados = data[0].split("/")

        let dia = parseInt(dados[0])
        let mes = parseInt(dados[1])
        let ano = parseInt(dados[2])
        let hoje = new Date()

        if(dia > 31 || mes > 12){
            return null
        }
        if(ano<hoje.getFullYear()){
            return null
        }
        if(ano == hoje.getFullYear() && mes < hoje.getMonth()+1){
            return null
        }
        if(ano == hoje.getFullYear() && mes == hoje.getMonth()+1 && dia <= hoje.getDate()){  
            return null
        }

        return data[0]
    }else{
        return null
    }
}

describe("retornando data informada",()=>{
    test( "o dia da consulta 12/02/2022",()=>{
        
        let data = "2022-01-19T07:11:20"
        
        jest.useFakeTimers().setSystemTime(new Date(data));
        let input = "o dia da consulta 12/02/2022"
        expect(coletarDataInformada(input)).toBe("12/02/2022")

    })
    test( "o dia da consulta 20/02/2022",()=>{
        
        let data = "2022-03-19T07:11:20"
        
        jest.useFakeTimers().setSystemTime(new Date(data));
        let input = "o dia da consulta 20/02/2022"
        expect(coletarDataInformada(input)).toBe(null)

    })

    test( "o dia da consulta 12/03/2022",()=>{
        
        let data = "2022-03-19T07:11:20"
        
        jest.useFakeTimers().setSystemTime(new Date(data));
        let input = "o dia da consulta 12/03/2022"
        expect(coletarDataInformada(input)).toBe(null)

    })
    test( "o dia da consulta 19/03/2022",()=>{
        
        let data = "2022-03-19T07:11:20"
        
        jest.useFakeTimers().setSystemTime(new Date(data));
        let input = "o dia da consulta 19/03/2022"
        expect(coletarDataInformada(input)).toBe(null)

    })


    test( "o dia da consulta 12/03/2021",()=>{
        
        let data = "2022-03-19T07:11:20"
        
        jest.useFakeTimers().setSystemTime(new Date(data));
        let input = "o dia da consulta 12/03/2021"
        expect(coletarDataInformada(input)).toBe(null)

    })

    test("retornar nulo com 90/85/5990",()=>{
        let input = "retornar nulo com 90/85/5990"
        expect(coletarDataInformada(input)).toBe(null)
    })
})
