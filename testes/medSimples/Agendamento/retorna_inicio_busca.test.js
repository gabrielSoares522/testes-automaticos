function run(mesBusca,carencia,ano,mes,dia) {
	mes = (parseInt(mes)-1).toString()
    
	if(mesBusca != undefined){
		let agora = new Date(parseInt(ano),parseInt(mes),parseInt(dia))
		let dadosMesPreferencial = mesBusca.split("/")
        
        if((agora.getMonth()+1) < parseInt(dadosMesPreferencial[0].toString()) || agora.getFullYear()< parseInt(dadosMesPreferencial[1])){
            return dadosMesPreferencial[1] +"-"+padWithLeadingZeros(dadosMesPreferencial[0],2)+"-01"
		}
	}
	let inicio = addDays(new Date(parseInt(ano),parseInt(mes),parseInt(dia)),carencia)
	return inicio.getFullYear()+"-"+padWithLeadingZeros((inicio.getMonth()+1),2)+"-"+padWithLeadingZeros(inicio.getDate(),2)
}

function addDays(date,days) {
    date.setDate(date.getDate() + days);
    return date;
}

function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

test("data inicial de busca",()=>{
    jest.useFakeTimers().setSystemTime(new Date("2023-05-12T13:15:00.000Z"));

    let agora = new Date(2023,5,5)

    expect(run(undefined,5,"2023","5","12")).toBe("2023-05-17")
    expect(run("04/2023",5,"2023","5","12")).toBe("2023-05-17")
    expect(run("05/2023",5,"2023","5","12")).toBe("2023-05-17")
    expect(run("06/2023",5,"2023","5","12")).toBe("2023-06-01")
})

test("padWithLeadingZeros",()=>{
    expect(padWithLeadingZeros(1,2)).toBe("01")
    expect(padWithLeadingZeros(2,2)).toBe("02")
    expect(padWithLeadingZeros(3,2)).toBe("03")
    expect(padWithLeadingZeros(4,2)).toBe("04")
    expect(padWithLeadingZeros(5,2)).toBe("05")
    expect(padWithLeadingZeros(6,2)).toBe("06")
    expect(padWithLeadingZeros(7,2)).toBe("07")
    expect(padWithLeadingZeros(8,2)).toBe("08")
    expect(padWithLeadingZeros(9,2)).toBe("09")
    expect(padWithLeadingZeros(10,2)).toBe("10")
    expect(padWithLeadingZeros(11,2)).toBe("11")
    expect(padWithLeadingZeros(12,2)).toBe("12")
})