function run(inputVariable1) {
    var DDD = inputVariable1.substr(3,2);
    var cobertura;
    if (DDD == '11' || DDD == '21' ){
        cobertura = true;
    }
    else {
        cobertura = false;
    }
    return cobertura;
}
test("a",()=>{
    let resu = run("+5511982215400")
    expect(resu).toBe(true)
})