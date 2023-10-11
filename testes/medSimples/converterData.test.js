function converterData(data){
    if(data.indexOf("/") >= 0){
        let dados = data.split("/")
        return dados[2] +"-" + dados[1] + "-" + dados[0]
    }
    if(data.indexOf("-") >= 0){

        let dados = data.split("-")
        return dados[2] +"/" + dados[1] + "/" + dados[0]
    }
}

test("retornar data convertido no formato",()=>{
    expect(converterData("01/11/2022")).toBe("2022-11-01")
    expect(converterData("02/02/1995")).toBe("1995-02-02")
    expect(converterData("22/02/2000")).toBe("2000-02-22")
    expect(converterData("2022-11-01")).toBe("01/11/2022")
    expect(converterData("2022 11 01")).toBe(undefined)
})