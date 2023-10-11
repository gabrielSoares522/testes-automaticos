function run(startTime, endTime, workDays, dateTimeOffset, startTimeFriday, endTimeFriday) {
    dateTimeOffset = parseInt(dateTimeOffset)
    let today = nowUTC(dateTimeOffset)
    
    let startDate = utcDate(startTime, today)
    let endDate = utcDate(endTime, today)

    workDays = workDays.split(",");

    if(workDays.includes(today.getDay().toString())){
        if(today.getDay() == 5){
            let startDateFriday = utcDate(startTimeFriday, today)
            let endDateFriday = utcDate(endTimeFriday, today)

            if ((today - startDateFriday) > 0 && (endDateFriday - today) > 0) {
                return true
            }
        }else{
            if ((today - startDate) > 0 && (endDate - today) > 0) {
                return true
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
Reembolso: segunda à quinta-feira das 07h às 17h e de sexta-feira das 07h às 16h
*/
const dateTimeOffset = "0"
const startTime = "07:00"
const endTime = "17:00"
const workDays = "1,2,3,4,5"
const startTimeFriday = "07:00"
const endTimeFriday = "16:00"

describe("teste de horario de atendimento CS", () => {
    describe("segunda",()=>{
        let dia = "2023-09-11"
        test("dia 11/09/2023 as 06:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T06:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday)
            ).toBe(false)
        })

        test("dia 11/09/2023 as 07:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T07:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday)
            ).toBe(true)
        })

        test("dia 11/09/2023 as 16:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T16:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday)
            ).toBe(true)
        })

        test("dia 11/09/2023 as 17:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T17:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday)
            ).toBe(false)
        })
    })

    describe("sexta",()=>{
        let dia = "2023-09-15"
        test("dia "+dia+" as 06:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T06:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday)
            ).toBe(false)
        })

        test("dia "+dia+" as 07:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T07:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday)
            ).toBe(true)
        })

        test("dia "+dia+" as 15:30 dentro",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T15:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday)
            ).toBe(true)
        })

        test("dia "+dia+" as 16:30 fora",()=>{
            jest.useFakeTimers().setSystemTime(new Date(dia+"T16:30:00.000Z"))
            expect(
                run(startTime,
                    endTime,
                    workDays,
                    dateTimeOffset,
                    startTimeFriday,
                    endTimeFriday)
            ).toBe(false)
        })
    })
});