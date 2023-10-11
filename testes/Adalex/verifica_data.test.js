function run(input){
    try{
    input = converterData(input)
    } catch (e)
    {
        return "invalido"
    }
    if(verificaDataValida(input)){
        let prazoFim60Dias = acrecentaDias(new Date().toISOString(),60)

        let dataPassou = verificaSeDataPassou(input,prazoFim60Dias);

        if(dataPassou==false){
            return "menos 60 dias"
        }else{
            return "mais 60 dias"
        }
    }else{
        return "invalido"
    }
}
function acrecentaDias(data,dias) {
    var data = new Date(data);
    data.setDate(data.getDate() + dias);
    return data.toISOString();
}
function verificaSeDataPassou(data,dataVerificacao) {
    var data = new Date(data);
    var dataVerificacao = new Date(dataVerificacao);
    if (data < dataVerificacao) {
        return false;
    }
    return true;
}
function converterData(data) {
    var data = data.split("/");
    data = data[2] + "-" + data[1] + "-" + data[0];
    
    var data = new Date(data);
    return data.toISOString();
}

function verificaDataValida(input) {
    try{
        var data = new Date(input);
        var dataAtual = new Date();
        if (data < dataAtual) {
            return false;
        }
        return true;
    }catch(e){
        return "invalido";
    }

}

test("Verifica se a data passada é maior que a data de verificação", () => {
    expect(verificaSeDataPassou("2020-01-01","2020-01-02")).toBe(false);
    
    
    jest.useFakeTimers().setSystemTime(new Date("2022-05-02T09:10:00.000Z"));
    expect(verificaSeDataPassou("2022-05-01",new Date().toISOString())).toBe(false);

    expect(verificaSeDataPassou("2022-05-02",new Date().toISOString())).toBe(false);
    
    expect(verificaSeDataPassou("2022-05-03",new Date().toISOString())).toBe(true);
    
    expect(run("01/05/2022")).toBe("invalido");
    expect(run("03/05/2022")).toBe("menos 60 dias");
    expect(run("03/09/2022")).toBe("mais 60 dias");
});