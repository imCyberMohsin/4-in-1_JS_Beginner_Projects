//* Script Infinte Color Change 

// Generate Random Color
const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// Declaring this in global scope, so that we can use it inside both below functions.
let IntervalId;

// StartChangingColor() 
const startChangeColor = () => {
    if (!IntervalId) {
        IntervalId = setInterval(bgColor, 1000);
    }

    function bgColor() {
        document.body.style.background = randomColor();
    }
}

// stopChangingColor
const stopChangeColor = () => {
    clearInterval(IntervalId);
    IntervalId = null;
}

// Start Button
document.querySelector('#start').addEventListener('click', startChangeColor)

// Stop Button
document.querySelector('#stop').addEventListener('click', stopChangeColor)
