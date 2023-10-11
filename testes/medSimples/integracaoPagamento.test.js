function retornarVencimentoDiaTexto(prazo = 1){
    var today = new Date();
    var vencimento = new Date(today.getFullYear(), today.getMonth(), today.getDate()+prazo)
    
    return vencimento.toISOString().split("T")[0]
}

test("retornar vencimento dia texto",()=>{
    
    jest.useFakeTimers().setSystemTime(new Date("2023-04-05T10:54:00"))
    expect(retornarVencimentoDiaTexto()).toBe("2023-04-06")
    jest.useFakeTimers().setSystemTime(new Date("2023-03-29T10:54:00"))
    expect(retornarVencimentoDiaTexto(10)).toBe("2023-04-08")
})