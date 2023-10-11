function run(startTime, endTime,workDays,dateTimeOffset) {
    dateTimeOffset = parseInt(dateTimeOffset);
    let today = nowUTC(dateTimeOffset);
    
    let startDate = utcDate(startTime, today);
    let endDate = utcDate(endTime, today);
    workDays = workDays.split(",");

    if(workDays.includes(today.getDay().toString())){
        if ((today - startDate) > 0 && (endDate - today) > 0) {
            return true
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