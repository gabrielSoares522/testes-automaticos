function run(mesBusca,carencia,ano,mes,dia) {
	mes = (parseInt(mes)-1).toString()
	if(mesBusca!=undefined){
		let agora = new Date(parseInt(ano),parseInt(mes),parseInt(dia))
		let dadosMesPreferencial = mesBusca.split("/")
        let ultimoDia = "30"
        switch(dadosMesPreferencial[0]){
            case "01":
            case "03":
            case "05":
            case "07":
            case "08":
            case "10":
            case "12":
                ultimoDia="31"
                break
            case "02":
                ultimoDia = "28"
                break
        }
        if((agora.getMonth()+1) < parseInt(dadosMesPreferencial[0].toString()) || agora.getFullYear()< parseInt(dadosMesPreferencial[1])){
            let fim = addDays(new Date(parseInt(dadosMesPreferencial[1]),parseInt(dadosMesPreferencial[0]),1),-1)
            
	    return fim.getFullYear()+"-"+padWithLeadingZeros((fim.getMonth()+1),2)+"-"+padWithLeadingZeros(fim.getDate(),2)
            //return dadosMesPreferencial[1] +"-"+padWithLeadingZeros(dadosMesPreferencial[0],2)+"-"+ultimoDia
		}
	}
    
	let fim = addDays(new Date(parseInt(ano),parseInt(mes),parseInt(dia)),carencia+30)
	return fim.getFullYear()+"-"+padWithLeadingZeros((fim.getMonth()+1),2)+"-"+padWithLeadingZeros(fim.getDate(),2)
}

function addDays(date,days) {
    date.setDate(date.getDate() + days);
    return date;
}
function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}
test("data fim de busca",()=>{
    jest.useFakeTimers().setSystemTime(new Date("2023-05-12T13:15:00.000Z"));
    expect(run(undefined,5,"2023","05","12")).toBe("2023-06-16")
    expect(run("04/2023",5,"2023","05","12")).toBe("2023-06-16")
    expect(run("05/2023",5,"2023","05","12")).toBe("2023-06-16")
    expect(run("06/2023",5,"2023","05","12")).toBe("2023-06-30")
    
    jest.useFakeTimers().setSystemTime(new Date("2022-12-29T13:15:00.000Z"));
    expect(run("01/2023",5,"2022","12","29")).toBe("2023-01-31")
    expect(run("02/2023",5,"2022","12","29")).toBe("2023-02-28")
    expect(run("03/2023",5,"2022","12","29")).toBe("2023-03-31")
    expect(run("04/2023",5,"2022","12","29")).toBe("2023-04-30")
    expect(run("05/2023",5,"2022","12","29")).toBe("2023-05-31")
    expect(run("06/2023",5,"2022","12","29")).toBe("2023-06-30")
    expect(run("07/2023",5,"2022","12","29")).toBe("2023-07-31")
    expect(run("08/2023",5,"2022","12","29")).toBe("2023-08-31")
    expect(run("09/2023",5,"2022","12","29")).toBe("2023-09-30")
    expect(run("10/2023",5,"2022","12","29")).toBe("2023-10-31")
    expect(run("11/2023",5,"2022","12","29")).toBe("2023-11-30")
    expect(run("12/2023",5,"2022","12","29")).toBe("2023-12-31")
    expect(run("01/2024",5,"2022","12","29")).toBe("2024-01-31")
    expect(run("02/2024",5,"2022","12","29")).toBe("2024-02-29")
    expect(run("02/2025",5,"2022","12","29")).toBe("2025-02-28")
})