function run(offset, weekSchedule) {
    offset = parseInt(offset);

    weekSchedule = JSON.parse(weekSchedule);

    let today = nowUTC(offset);

    if (isWorkDay(today, weekSchedule)) {
        let todaySchedule = getTodaySchedule(weekSchedule, today);
        let intervalTime = getIntervalTime(todaySchedule);

        return checkTime(intervalTime, today);
    }

    return false;
}

function getIntervalTime(todaySchedule) {
    let intervalTime = [];
    for (let i = 0; i < todaySchedule.workTime.length; i++) {
        intervalTime.push({
        start: utcDate(todaySchedule.workTime[i].start),
        end: utcDate(todaySchedule.workTime[i].end)
        });
    }

    return intervalTime;
}

function checkTime(intervalTime, today) {
    for (let i = 0; i < intervalTime.length; i++) {
        if (today - intervalTime[i].start > 0 && intervalTime[i].end - today > 0)
            return true;
    }

    return false;
}

function getTodaySchedule(weekSchedule, today) {
    for (let i = 0; i < weekSchedule.length; i++) {
        if (weekSchedule[i].num == today.getDay()) 
            return weekSchedule[i];
    }
}

//Get now UTC Date
function nowUTC(offset) {
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

//Get UTC Date
function utcDate(timeString) {
    let now = new Date();

    let hour = getValueByString("hour", timeString);
    let minutes = getValueByString("minutes", timeString);

    let utc_timestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        hour,
        minutes,
        0,
        0
    );

    return new Date(utc_timestamp);
}

//Get hour/minute by string with pattern HH:mm
function getValueByString(type, timeString) {
    if (type === "hour") {
        return parseInt(timeString.substring(0, timeString.indexOf(":")));
    } else if (type === "minutes") {
        return parseInt(
        timeString.substring(timeString.indexOf(":") + 1, timeString.length)
        );
    }

    return 0;
}

//Get if today is a work day
function isWorkDay(today, workDays) {
    for (let i = 0; i < workDays.length; i++) {
        if (workDays[i].num == today.getDay().toString()) return true;
    }
    
    return false;
}

let workSchedule = JSON.stringify([
    {
        "num": 1,
        "name": "Monday",
        "portugueseName": "Segunda",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "num": 2,
        "name": "Tuesday",
        "portugueseName": "Terça",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "num": 3,
        "name": "Wednesday",
        "portugueseName": "Quarta",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "num": 4,
        "name": "Thursday",
        "portugueseName": "Quinta",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    },
    {
        "num": 5,
        "name": "Friday",
        "portugueseName": "Sexta",
        "workTime": [
            {
                "start": "08:00",
                "end": "17:00"
            }
        ]
    }
]);

test("testA",()=>{
    
    let momentos = ["2023-01-16T10:00:00","2023-01-16T16:59:00","2023-01-16T08:01:00",
    "2023-01-17T10:00:00","2023-01-17T16:59:00","2023-01-17T08:01:00",
    "2023-01-18T10:00:00","2023-01-18T16:59:00","2023-01-18T08:01:00",
    "2023-01-19T10:00:00","2023-01-19T16:59:00","2023-01-19T08:01:00",
    "2023-01-20T10:00:00","2023-01-20T16:59:00","2023-01-20T08:01:00"]
    momentos.forEach(momento => {
        jest.useFakeTimers().setSystemTime(new Date(momento));

        expect(momento +" - "+ run("-3",workSchedule)).toBe(momento +" - "+ true)

    });
})
test("testB",()=>{
    
    let momentos = ["2023-01-21T10:00:00","2023-01-19T17:01:00","2023-01-19T07:59:00"]
    momentos.forEach(momento => {
        jest.useFakeTimers().setSystemTime(new Date(momento));
        console.log(new Date())
        expect(momento +" - "+ run("-3",workSchedule)).toBe(momento +" - "+ false)

    });
})

/*test("testC", ()=>{
    
    jest.useFakeTimers().setSystemTime(new Date("2023-01-19T17:01:00"));
    let resultado = nowUTC("-3")

    expect(resultado).toBe(new Date())
})*/