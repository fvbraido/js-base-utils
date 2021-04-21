export var currentTime = new Date();
export var day = currentTime.getDate();
export var year = currentTime.getFullYear();
export var hour = currentTime.getHours();
export var milisec = currentTime.getMilliseconds();
export var minutes = currentTime.getMinutes();
export var month = currentTime.getMonth() + 1;
export var sec = currentTime.getSeconds();
export var time = currentTime.getTime();

export function monthNumberToPtBr(month_number) {
    const month_names = {
        1: "janeiro",
        2: "fevereiro",
        3: "março",
        4: "abril",
        5: "maio",
        6: "junho",
        7: "julho",
        8: "agosto",
        9: "setembro",
        10: "outubro",
        11: "novembro",
        12: "dezembro",
    }
    return (month_names[`${month_number}`])
}

export function addLeftZero(number) {
    if (String(number).length === 1) {
        return `0${number}`
    } else {
        return number
    }
};

export function getDaysInMonth(month, year) {
    month = parseInt(month);
    year = parseInt(year);
    if (month && year) {
        return new Date(year, month, 0).getDate();
    }
};

export function getDayOfCurrentWeek(d, weekday) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day === 0 ? weekday + day : (weekday - day)));
}

export function getMondayOfCurrentWeek(d) {
    var day = d.getDay();

    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day === 0 ? -6 : 1) - day);
}
export function getFridayOfCurrentWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day === 0 ? -2 : 5) - day);
}

export function getSundayOfCurrentWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day === 0 ? 0 : 7) - day);
}

export function addWeekToDate(initial_date, numberWeeks) {
    let next_week_date = new Date();
    next_week_date.setDate(initial_date.getDate() + numberWeeks * 7);
    return next_week_date
}

export function addMonthsToDate(initial_year, initial_month, initial_day, months_to_add, setDayEndOfMonth) {
    // initial_day: january is 0 and december 11
    initial_year = parseInt(initial_year);
    initial_month = parseInt(initial_month) - 1;
    initial_day = parseInt(initial_day);
    months_to_add = parseInt(months_to_add);
    if ((initial_year >= 0) && (initial_month >= 0) && (initial_day >= 0) && (months_to_add >= 0)) {
        var date = new Date(initial_year, initial_month, initial_day);
        date.setMonth(date.getMonth() + months_to_add);
        if (setDayEndOfMonth) {
            return `${date.getFullYear()}-${addLeftZero(date.getMonth() + 1)}-${addLeftZero(getDaysInMonth(date.getMonth() + 1, date.getFullYear()))}`;;
        } else {
            return `${date.getFullYear()}-${addLeftZero(date.getMonth() + 1)}-${addLeftZero(date.getDate())}`;;
        }
    } else {
        return undefined;
    }
};

export function convertGMTtoUTCdateTime(dateTime) {
    if (dateTime) {
        if (dateTime.toString().length >= 19) {
            return (dateTime.toString().slice(0, 19));
        } else if (dateTime.toString().length < 19 && dateTime.toString().length >= 10) {
            return (dateTime.toString().slice(0, 10) + 'T08:00:00');
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}

// Get a YYYY-MM-DD date and convert to Javascript Date
export function dateStringConverter(yyyy_mm_dd) {
    var string_yyyy_mm_dd = String(yyyy_mm_dd).split("-");
    if (string_yyyy_mm_dd.length === 3) {
        var date = new Date(string_yyyy_mm_dd[0], string_yyyy_mm_dd[1] - 1, string_yyyy_mm_dd[2]);
        return date;
    } else {
        return null;
    }
}

// Get a YYYY-MM-DD date and display in different forms
export function dateStrf(yyyy_mm_dd, output_format, separator) {
    // output_format: ["DD-MM-YYYY"]
    var jsDate = dateStringConverter(yyyy_mm_dd);
    if (jsDate) {
        if (output_format === "DD-MM-YYYY") {
            return `${addLeftZero(jsDate.getDate())}${separator}${addLeftZero(jsDate.getMonth() + 1)}${separator}${jsDate.getFullYear()}`
        } else {
            return yyyy_mm_dd;
        }
    } else {
        return "";
    }
}

// Get a YYYY-MM-DD date and display in different forms
export function dateStrfBr(yyyy_mm_dd) {
    return dateStrf(yyyy_mm_dd, "DD-MM-YYYY", "/")
}

// Get a YYYY-MM-DDTHH:MM:SS date and in Brazilian DD/MM/YYYY HH:MM
export function datetimeStrfBr(yyyy_mm_dd_hh_mm_ss) {
    // output_format: ["DD-MM-YYYY"]
    var result = ""
    if (yyyy_mm_dd_hh_mm_ss) {
        var jsDate = String(yyyy_mm_dd_hh_mm_ss).split("-")
        var year = String(jsDate[0]);
        var month = String(jsDate[1]);
        var time = String(jsDate[2]);
        if (year && month && time) {
            var day = jsDate[2].split("T")[0];
            var hour = jsDate[2].split("T")[1].split(":")[0];
            var min = jsDate[2].split("T")[1].split(":")[1];
            result = `${day}/${month}/${year} ${hour}:${min}`
        }
    } else {
        result = "";
    }
    return result
}

export const current_date_br = `${addLeftZero(day)}/${addLeftZero(month)}/${year}`;
export const current_month_year_br = `${addLeftZero(month)}/${year}`;
export const current_time_br = `${addLeftZero(hour)}:${addLeftZero(minutes)}:${addLeftZero(sec)}`;
export const current_date_written_br = `${addLeftZero(day)} de ${monthNumberToPtBr(month)} de ${addLeftZero(year)}`;
export const current_date = (`${year}-${addLeftZero(month)}-${addLeftZero(day)}`);
export const beginning_of_month = (`${year}-${addLeftZero(month)}-${addLeftZero(1)}`);
export const end_of_month = (`${year}-${addLeftZero(month)}-${getDaysInMonth(month, year)}`);

export function strHour(time) {
    if (time) {
        return (
            `${addLeftZero(time.getHours())}:${addLeftZero(time.getMinutes())}`
        )
    } else {
        return ""
    }
}

export function strDate(time) {
    if (time) {
        return (
            `${addLeftZero(time.getFullYear())}-${addLeftZero(time.getMonth() + 1)}-${addLeftZero(time.getDate())}`
            )
    } else {
        return ""
    }
}


export function getCurrentIsoTimeToFormInput(time = "") {
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    return localISOTime;
}


export function datetimeOlderThan(initial_date, threshold, threshold_unity = "min") {
    var result = false;
    var diff = (new Date() - new Date(initial_date));
    var diff_min = Math.round(((diff % 86400000) % 3600000) / 60000);
    if (threshold_unity === "year") {
        threshold_unity = threshold_unity * 365 * 24 * 60;
    }
    if (diff_min >= threshold) {
      result = true
    }
    return result
}