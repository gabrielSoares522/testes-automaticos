function run(startTime, endTime, workDays, dateTimeOffset, startTimeFriday, endTimeFriday, startTimeSaturday, endTimeSaturday,startTimeDN,endTimeDN,tipoAtendimento) {
    tipoAtendimento = tipoAtendimento.trim()
    tipoAtendimento = tipoAtendimento.toLowerCase()

    dateTimeOffset = parseInt(dateTimeOffset)
    let today = nowUTC(dateTimeOffset)
    
    let startDate = utcDate(startTime, today)
    let endDate = utcDate(endTime, today)

    workDays = workDays.split(",")

    if(workDays.includes(today.getDay().toString())){
        if(tipoAtendimento == "dúvidas nutricionais" || tipoAtendimento == "duvidas nutricionais"){
            let startDateDN = utcDate(startTimeDN, today)
            let endDateDN = utcDate(endTimeDN, today)

            if ((today - startDateDN) > 0 && (endDateDN - today) > 0) {
                return true
            }
        }
        else
        {
            if(today.getDay() == 5){
                let startDateFriday = utcDate(startTimeFriday, today)
                let endDateFriday = utcDate(endTimeFriday, today)

                if ((today - startDateFriday) > 0 && (endDateFriday - today) > 0) {
                    return true
                }
            }else{
                if(today.getDay() == 6){
                    let startDateSaturday = utcDate(startTimeSaturday, today)
                    let endDateSaturday = utcDate(endTimeSaturday, today)

                    if ((today - startDateSaturday) > 0 && (endDateSaturday - today) > 0) {
                        return true
                    }
                }else{
                    if ((today - startDate) > 0 && (endDate - today) > 0) {
                        return true
                    }
                }
            }
        }
    }
    
    return false;
}

const nowUTC = (offset) => {
    let now = new Date();
    let utc_timestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
        now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());

    return new Date(utc_timestamp+ offset * 3600 * 1000);
}

function utcDate(timeString,today){
    let hour = getValueByString('hour', timeString);
    let minutes = getValueByString('minutes', timeString);
    let utc_timestamp = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate(), hour, minutes, 0, 0);
    
    return new Date(utc_timestamp);
}

function getValueByString(type, timeString) {
    if (type == 'hour') {
        return parseInt(timeString.substring(0, timeString.indexOf(':')));
    }
    else if (type == 'minutes') {
        return parseInt(timeString.substring(timeString.indexOf(':') + 1, timeString.length));
    }
    return 0;
}
/*
Informações/agendamento: segunda à quintafeira das 08h às 20h, sexta feira das 08h às 19h e
sábado das 09h às 13h

Dúvidas nutricionais: segunda à sexta-feira das 10h às 18h
*/
const dateTimeOffset = "0"
const startTime = "08:00"
const endTime = "20:00"
const workDays = "1,2,3,4,5,6"
const startTimeFriday = "08:00"
const endTimeFriday = "19:00"
const startTimeSaturday = "09:00"
const endTimeSaturday = "13:00"
const startTimeDN = "10:00"
const endTimeDN = "18:00"
const tipoAtendimento = "Outros "
const tipoAtendimentoDN = "Dúvidas Nutricionais"

describe("teste de horario de atendimento CS", () => {
    describe("segunda",()=>{
        let dia = "2023-09-11"
        test("dia 11/09/2023 as 06:00 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T06:00:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(false)
        })

        test("dia 11/09/2023 as 08:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T08:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(true)
        })

        test("dia 11/09/2023 as 19:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T19:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(true)
        })

        test("dia 11/09/2023 as 20:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T20:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday,
                    startTimeSaturday,
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(false)
        })
    })

    describe("sexta",()=>{
        let dia = "2023-09-15"
        test("dia "+dia+" as 06:00 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T06:00:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(false)
        })

        test("dia "+dia+" as 08:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T08:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(true)
        })

        test("dia "+dia+" as 18:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T18:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(true)
        })

        test("dia "+dia+" as 19:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T19:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday,
                    startTimeSaturday,
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(false)
        })
    })

    describe("sabado",()=>{
        let dia = "2023-09-16"
        test("dia "+dia+" as 08:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T08:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(false)
        })

        test("dia "+dia+" as 09:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T09:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(true)
        })

        test("dia "+dia+" as 12:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T12:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(true)
        })

        test("dia "+dia+" as 13:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T13:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday,
                    startTimeSaturday,
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimento)
            ).toBe(false)
        })
    })

    describe("Dúvidas nutricional",()=>{
        let dia = "2023-09-15"
        test("dia "+dia+" as 09:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T09:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimentoDN)
            ).toBe(false)
        })

        test("dia "+dia+" as 10:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T10:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimentoDN)
            ).toBe(true)
        })

        test("dia "+dia+" as 17:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T17:30:00.000Z"))
            expect(
                run(startTime, 
                    endTime, 
                    workDays, 
                    dateTimeOffset, 
                    startTimeFriday, 
                    endTimeFriday, 
                    startTimeSaturday, 
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimentoDN)
            ).toBe(true)
        })

        test("dia "+dia+" as 18:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T18:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday,
                    startTimeSaturday,
                    endTimeSaturday,
                    startTimeDN,
                    endTimeDN,
                    tipoAtendimentoDN)
            ).toBe(false)
        })
    })
});