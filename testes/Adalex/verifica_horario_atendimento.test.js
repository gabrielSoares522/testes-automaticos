function run(offset, startFinanceiro, endFinanceiro, workDaysFinanceiro, 
    startVendas, endVendas, workDaysVendas,
    startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,fila) {
    let start
    let end
    let workDays

    offset = parseInt(offset)
    let today = nowUTC(offset)

    fila = fila.toLowerCase();
    if (fila === 'financeiro') {
        workDays = workDaysFinanceiro
        
        if(today.getDay() === 5){
            start = startFridayFinanceiro
            end = endFridayFinanceiro
        }else{
            start = startFinanceiro
            end = endFinanceiro
        }
    }
    else {
        workDays = workDaysVendas
        
        if(today.getDay() === 6){
            start = startSaturdayVendas
            end = endSaturdayVendas
        }else{
            start = startVendas
            end = endVendas
        }
    }
    if(isWorkDay(today, workDays)){

        let startDate = utcDate(start, today)
        let endDate = utcDate(end, today)
        
        return ((today - startDate) > 0) && ((endDate - today) > 0)
    }else{
        return false
    }
}

function nowUTC(offset) {
    let now = new Date;
    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    return new Date(utc_timestamp + offset * 3600 * 1000);
}

function utcDate(timeString, today) {
    let now = new Date;

    let hour = getValueByString('hour', timeString);
    let minutes = getValueByString('minutes', timeString);
    let utc_timestamp = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(),
        hour, minutes, 0, 0);
    return new Date(utc_timestamp);
}

function getValueByString(type, timeString) {

    if (type === 'hour') {
        return parseInt(timeString.substring(0, timeString.indexOf(':')));
    }

    else if (type === 'minutes') {
        return parseInt(timeString.substring(timeString.indexOf(':') + 1, timeString.length));
    }

    return 0;
}

function isWorkDay(today, workDays) {
    workDays = workDays.split(',');

    return workDays.indexOf(today.getDay().toString()) >= 0;
}

const startFinanceiro = "08:30"
const endFinanceiro = "17:00"
const workDaysFinanceiro = "1,2,3,4,5"
const startFridayFinanceiro = "08:30"
const endFridayFinanceiro = "16:00"

const startVendas = "09:00"
const endVendas = "17:00"
const workDaysVendas = "1,2,3,4,5,6"
const startSaturdayVendas = "09:00"
const endSaturdayVendas = "13:30"
const offset = "0"

describe("atendimentos de vendas",()=>{
    
    describe("no sabado",()=>{
        test("as 9:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date("2023-08-26T09:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"vendas")).toBe(true)
        })

        test("as 10h",()=>{
            jest.useFakeTimers().setSystemTime(new Date("2023-08-26T10:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"vendas")).toBe(true)
        })

        test("as 13h",()=>{
            jest.useFakeTimers().setSystemTime(new Date("2023-08-26T13:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"vendas")).toBe(true)
        })

        test("as 16:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date("2023-08-26T16:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"vendas")).toBe(false)
        })
    })

    describe("na quinta",()=>{
        let quinta = "2023-08-24"
        test("as 9:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T09:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"vendas")).toBe(true)
        })

        test("as 10h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T10:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"vendas")).toBe(true)
        })

        test("as 13h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T13:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"vendas")).toBe(true)
        })

        test("as 16:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T16:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"vendas")).toBe(true)
        })
    })
})

describe("atendimentos de financeiro",()=>{
    describe("na quarta",()=>{
        let quarta = "2023-08-23"

        test("as 8:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quarta+"T08:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })

        test("as 9:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quarta+"T09:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 10h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quarta+"T10:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 13h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quarta+"T13:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 16:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quarta+"T16:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 17:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quarta+"T17:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })
    })

    describe("na quinta",()=>{
        let quinta = "2023-08-24"

        test("as 8:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T08:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })

        test("as 9:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T09:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 10h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T10:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 13h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T13:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 16:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T16:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 17:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(quinta+"T17:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })
    })

    describe("na sexta",()=>{
        let sexta = "2023-08-25"

        test("as 8:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sexta+"T08:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })

        test("as 9:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sexta+"T09:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 10h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sexta+"T10:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 13h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sexta+"T13:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(true)
        })

        test("as 16:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sexta+"T16:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })

        test("as 17:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sexta+"T17:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })
    })

    describe("no sabado",()=>{
        let sabado = "2023-08-26"

        test("as 8:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sabado+"T08:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })
        
        test("as 9:10",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sabado+"T09:10:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })

        test("as 10h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sabado+"T10:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })

        test("as 13h",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sabado+"T13:00:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })

        test("as 16:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sabado+"T16:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })

        test("as 17:50",()=>{
            jest.useFakeTimers().setSystemTime(new Date(sabado+"T17:50:00.000Z"));
            
            expect(run(offset,startFinanceiro, endFinanceiro, workDaysFinanceiro, 
        startVendas, endVendas, workDaysVendas,
        startSaturdayVendas, endSaturdayVendas,startFridayFinanceiro, endFridayFinanceiro,"financeiro")).toBe(false)
        })
    })
})