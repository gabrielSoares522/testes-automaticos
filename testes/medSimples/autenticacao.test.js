function converterbase64(input){
    let buf = Buffer.from(input, 'utf-8') 
    
    return buf.toString('base64')
    btoa(str)
}
test("convertendo string para base64",()=>{
    expect(converterbase64("5473:83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe")).toBe("NTQ3Mzo4M013NXU4OTg4UWo2ZlpxUzRaOEs3THpPbzFqMjhTNzA2UjBCZUZl")
})
