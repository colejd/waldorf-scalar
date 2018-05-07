// http://stackoverflow.com/a/34841026
function GetFormattedTime(timeInSeconds){
    if(isNaN(timeInSeconds)) return 0;
    let time = timeInSeconds | 0; //Truncate to integer
    let hours   = Math.floor(time / 3600) % 24
    let minutes = Math.floor(time / 60) % 60
    let seconds = time % 60
    let formatted = [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")

    if (formatted.charAt(0) == "0") {
        formatted = formatted.substr(1);
    }

    let ms = (timeInSeconds % 1).toFixed(2);
    formatted += ms.toString().substr(1);

    return formatted;
}

// From http://stackoverflow.com/a/9640417/7138792
function GetSecondsFromHMS(hms){
    let parts = hms.split('.');
    let ms = "0";
    if(parts.length > 1) ms = '.'+parts[1];

    let p = parts[0].split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    s += parseFloat(ms);
    return s;
}

export { GetFormattedTime, GetSecondsFromHMS };