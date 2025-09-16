var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function bookmarks(bookmarkList) {
    console.log(bookmarkList);
}
;
function getConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const fetchedData = yield fetch('../config.json');
        const config = yield fetchedData.json();
        //run all widgets' functions
        setInterval(updateClockTime, 1000, config.timeSeparator);
        setInterval(ageCounter, 1000, config.birthYear, config.birthMonth, config.birthDay);
        clockDate(config.dateSeparator);
        ageCounter(config.birthYear, config.birthMonth, config.birthDay);
        yearCountdown();
        bookmarks(config.bookmarks);
    });
}
getConfig();
export {};
//# sourceMappingURL=main.js.map