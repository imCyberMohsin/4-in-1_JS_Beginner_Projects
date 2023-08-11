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
let currentColor;

// StartChangingColor() 
const startChangeColor = () => {
    if (!IntervalId) {
        IntervalId = setInterval(changeColors, 1000);
        changeColors(); // initial colors change
    }

    function changeColors() {
        currentColor = randomColor();

        // document.body.style.background = randomColor();

        const head = document.querySelector('#heading');
        head.style.color = currentColor;

        const btns = document.getElementsByClassName('btn');
        for (let btn of btns) {
            btn.style.backgroundColor = currentColor;
        }

        const shadow = document.getElementsByClassName('container');
        for (let s of shadow) {
            s.style.boxShadow = `3px 3px 200px 1px ${currentColor}`;
        }
    }
}

// stopChangingColor
const stopChangeColor = () => {
    clearInterval(IntervalId);
    IntervalId = null;
}

// Start Button
document.querySelector('#start').addEventListener('click', startChangeColor);

// Stop Button
document.querySelector('#stop').addEventListener('click', stopChangeColor);
