import .css/styles.css

const countDown = () => {
    const youthDay = new Date("16 June, 2022 12:00:00").getDate;
    const now = new Date;
    const gap = youthDay - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % day) / minute);
    const textSecond = Math.floor((gap % day) / second);

    document.querySelector(".day").innerText = textDay;
    document.querySelector("hour").innerText = textHour; 
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;0
}

countDown();