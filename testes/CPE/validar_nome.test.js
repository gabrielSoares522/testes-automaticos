function run(input) {
    let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~123456789]/;
    input = input.trim()

    return (((input.split(" ")).length > 1) && !format.test(input))
}
test("nome",()=>{
    expect(run("Gabriel soares")).toBe(true)
    expect(run("Gabriel Gonsalves ")).toBe(true)
    expect(run("Gabriel soares ")).toBe(true)
    expect(run("(13) 99999-9999")).toBe(false)
    expect(run("Gabriel sssaa222")).toBe(false)
})
