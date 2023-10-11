function run(){
    let data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth()


    data = new Date(ano, mes + 1, 0)
    let d = ((data.getDate().toString().length < 2)? "0" : "") + data.getDate().toString()
    let m = (((data.getMonth() + 1).toString().length < 2)? "0" : "") + (data.getMonth() + 1).toString()
    let a = data.getFullYear().toString()

    return `${d}/${m}/${a}`
}

test("Verifica se a data passada é maior que a data de verificação", () => {
    
    jest.useFakeTimers().setSystemTime(new Date("2023-09-04T00:00:00.000Z"));
    expect(run()).toBe("30/09/2023");

    jest.useFakeTimers().setSystemTime(new Date("2023-11-04T00:00:00.000Z"));
    expect(run()).toBe("30/11/2023");
});
