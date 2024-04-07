
setInterval(() => {
    let date = new Date();
    let gethoure = date.getHours()
    let  getminute = date.getMinutes()
    let getsec = date.getSeconds()
    let getdate =  date.getDate()
    let getday = date.getDay()
    let getmonth = date.getMonth()
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if(gethoure >10){
        getdate = "0" + getdate;
    }
    let prepand = (gethoure >= 12) ? " PM " : " AM ";
    gethoure = (gethoure >= 12) ? gethoure - 12 : gethoure;
    if (gethoure === 0 && prepand === ' PM ') {
        if (getminute === 0 && getsec === 0) {
            gethoure = 12;
            prepand = ' Noon';
        } else {
            gethoure = 12;
            prepand = ' PM';
        }
    }

    if (gethoure === 0 && prepand === ' AM ') {
        if (getminute === 0 && getsec === 0) {
            gethoure = 12;
            prepand = ' Midnight';
        } else {
            gethoure = 12;
            prepand = ' AM';
        }
    }

    document.getElementById("houre").innerText = gethoure + '-';
    document.getElementById("minute").innerText = getminute + '-';
    document.getElementById("second").innerText = getsec;
    document.getElementById("zone").innerText = `- ${prepand}`;
    document.getElementById("date").innerText = getdate + '-';
    document.getElementById("month").innerText = month[getmonth] + '-';
    document.getElementById("year").innerText = date.getFullYear();
    document.getElementById("day").innerText = day[getday]
}, 1000);
