export const showTime = () => {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let p = `AM`;
    if (hour > 12) {
        hour -= 12;
        p = `PM`;
    }
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (minute < 10) {
        minute = `0${minute}`;
    }
    if (second < 10) {
        second = `0${second}`;
    }
    let myTime = `${hour}:${minute}:${second} ${p}`;
    return myTime
}