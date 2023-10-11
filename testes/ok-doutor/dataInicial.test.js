function run() {
    let date = new Date();
    date.setDate(date.getDate() + 1);

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();


    var teste = year + "-" + (month+1) + "-" + day;

    return teste;
}

test("final",()=>{
    
    jest.useFakeTimers().setSystemTime(new Date("2023-01-26T10:00:00"));
    expect(run()).toBe("2023-1-27")
})