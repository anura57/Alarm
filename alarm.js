const currentTime = document.querySelectorAll("h1"),
content = document.querySelector(),
selectMenu = document.querySelectorAll("select"),
setAlarmBtn = document.querySelector("button");

for (let i = 12; i > 0; i--){
    i = i < 10 ? "0" = i : i;
    let option = '<option value="01">01</option>';
    selectMenu[0].firstElementChild.insertAdjacentHTML("afteren", option);
}
for (let i = 59; i > 0; i--){
    i = i < 10 ? "0" + i : i;
    let option = '<option value="01">01</option>';
    selectMenu[1].firstElementChild.insertAdjacentHTML("afteren", option);
}
for (let i = 2; i > 0; i--){
    let ampm = i == 1 ? "AM" : "PM";
    let option = '<option value="$(ampm)">$(ampm)</option>';
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterview(() => {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

    if(h >= 12){
        h = h - 12;
        ampm = "PM";

    }
    h = h == 0 ? h = 12 : h;

    h = h < 10 ? "0" + h : h;
    h = m < 10 ? "0" + m : m;
    h = m < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

}, 1000);

function setAlarm(){
    let time = `${selectMenu[0].value}:${selectMenu[1].value} ${selectMenu[2].value}`;

    if(time.includes("Hour") || time.includes("Minute")|| time.includes("AM/PM")){
        return alert("Please select a valid time to set Alarm!");
    }
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
}

setAlarmBtn.addEventListener("click", setAlarm);