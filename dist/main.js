//shortcut function for localStorage.get()
function ls(value) {
    return localStorage.getItem(value);
}
function updateClockTime(separator) {
    const timeRN = new Date();
    //padStart() adds 0 when there is only a single digit
    const hour = String(timeRN.getHours()).padStart(2, '0');
    const minute = String(timeRN.getMinutes()).padStart(2, '0');
    const second = String(timeRN.getSeconds()).padStart(2, '0');
    document.getElementById('clockTime').innerText = `${hour}${separator}${minute}${separator}${second}`;
}
;
function clockDate(separator) {
    const dateRN = new Date();
    const month = dateRN.toLocaleString('default', { month: 'short' });
    const day = String(dateRN.getDate());
    const year = String(dateRN.getFullYear());
    //Suffix thing for the day number: ie 2nd, 21st, 4th...
    let suffix;
    switch (dateRN.getDate() % 10) {
        case 1:
            suffix = 'st';
        case 2:
            suffix = 'nd';
            break;
        case 3:
            suffix = 'rd';
            break;
        default:
            suffix = 'th';
    }
    ;
    document.getElementById('clockDate').innerText = `${month}${separator}${day}${suffix}${separator}${year}`;
}
;
function ageCounter(year, month, day) {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const timeDifference = (currentDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    document.getElementById('ageCounter').innerText = timeDifference.toFixed(8);
}
;
function yearCountdown() {
    const yearEnd = new Date(new Date().getFullYear() + 1, 0, 1).getTime();
    const yearStart = new Date(new Date().getFullYear(), 0, 1).getTime();
    const progress = (new Date().getTime() - yearStart) / (yearEnd - yearStart);
    document.getElementById('progressText').innerText = (progress * 100).toFixed(2);
    //Ignore error abt following, it works fine
    document.getElementById('yearCountdown').value = new Date().getTime() - yearStart;
    document.getElementById('yearCountdown').max = yearEnd - yearStart;
    document.getElementById('currentYear').innerText = String(new Date().getFullYear());
}
;
setInterval(updateClockTime, 1000, ls("timeSeparator"));
setInterval(ageCounter, 1000, Number(ls("birthYear")), Number(ls("birthMonth")), Number(ls("birthDay")));
clockDate(ls("dateSeparator"));
yearCountdown();
export {};
//# sourceMappingURL=main.js.map