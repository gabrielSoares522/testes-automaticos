function run(input) {
    const padrao = /^[0-9]{5}[-][0-9]{3}$/
    return padrao.test(input)
}

test("validar", ()=> {
    expect(run("11451-310")).toBe(true)
    //expect(run("11451310")).toBe(true)
    expect(run("11451-31")).toBe(false)
    //expect(run("1145131")).toBe(false)
})