//! Digital Clock Script

const clockHTML = document.getElementById('clock');

//! Using Arrow Function 
const showTime = () => {
    let dateNow = new Date();
    let hr = dateNow.getHours();
    let min = dateNow.getMinutes();
    let sec = dateNow.getSeconds();

    let time = `${hr} : ${min} : ${sec}`;

    clockHTML.innerHTML = `<h1>${time}</h1>`;

    setTimeout(showTime, 1000);
}

showTime();


// setInterval(function () {
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     clockHTML.innerHTML = `<h1>${time}</h1>`
// }, 1000);