function run(startTime, endTime,workDays,dateTimeOffset) {
    dateTimeOffset = parseInt(dateTimeOffset);
    let today = nowUTC(dateTimeOffset);
    
    workDays = workDays.split(",");

    if(workDays.includes(today.getDay().toString())){
        let startDate = utcDate(startTime, today);
        let endDate = utcDate(endTime, today);

        if ((today - startDate) > 0 && (endDate - today) > 0) {
            return true;
        }
    }
    
    return false;
}
const nowUTC = (offset) => {
    let now = new Date();
    let utc_timestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(), 
        now.getUTCDate(),
        now.getUTCHours(), 
        now.getUTCMinutes(), 
        now.getUTCSeconds(), 
        now.getUTCMilliseconds()
        );

    return new Date(utc_timestamp + offset * 3600 * 1000);
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

test("Retornar true quando esta dentro do horario",()=>{
    const configs = {
        startTime: "08:00",
        endTime: "16:00",
        workDays: "1,2,3,4,5",
        dateTimeOffset:"-3"
    }
    let momentos = ["2022-11-21T10:00:00","2022-11-22T08:20:00","2022-11-23T13:00:00","2022-11-24T15:00:00"]
    momentos.forEach(momento => {
        jest.useFakeTimers().setSystemTime(new Date(momento));

        let resultado = run(configs.startTime,configs.endTime,configs.workDays,configs.dateTimeOffset)

        expect(resultado).toBe(true)
    });
})