function run(data) {
    data = data.toLowerCase()
    data = data.trim()
    if(/([1-9]|0[1-9]|1[0-9]|2[0-9]|3[01])[- /.]([1-9]|0[1-9]|1[012])[- /.](19|20)\d\d$/.test(data) ||
       /([1-9]|0[1-9]|1[0-9]|2[0-9]|3[01])[- /.]([1-9]|0[1-9]|1[012])[- /.]([0-9][0-9])$/.test(data))
    {
        return true
    }
    
    return false
}

test("retornar true para data valida",()=>{
    expect(run("20/02/2000")).toBe(true)
})

test("retornar false para data não valida",()=>{
    expect(run("data")).toBe(false)
})