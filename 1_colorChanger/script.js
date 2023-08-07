//! 1. Script: Color Changer


// Getting the elements
const body = document.body;
const color_heading1 = document.getElementById("c-head1");
const color_heading2 = document.getElementById("c-head2");

const box_1 = document.getElementById("box-1");
const box_2 = document.getElementById("box-2");
const box_3 = document.getElementById("box-3");
const box_4 = document.getElementById("box-4");


// Event Listners
box_1.addEventListener("click", () => {
    // body.style.backgroundColor = 'crimson';
    let toggle = body.classList.toggle("box-1");
    let toggle2 = true;

    if (toggle && toggle2) {
        box_1.innerHTML = "<h1>ON</h1>";
        color_heading1.style.backgroundColor = "crimson";
        color_heading2.style.backgroundColor = "crimson";
    } else {
        box_1.innerHTML = "<h1>OFF</h1>";
        color_heading1.style.backgroundColor = "grey";
        color_heading2.style.backgroundColor = "grey";
    }
});

box_2.addEventListener("click", () => {
    // body.style.backgroundColor = "greenyellow";
    let toggle = body.classList.toggle("box-2");
    let toggle2 = true;

    if (toggle && toggle2) {
        box_2.innerHTML = "<h1>ON</h1>";
        color_heading1.style.backgroundColor = "greenyellow";
        color_heading2.style.backgroundColor = "greenyellow";
    } else {
        box_2.innerHTML = "<h1>OFF</h1>";
        color_heading1.style.backgroundColor = "grey";
        color_heading2.style.backgroundColor = "grey";
    }
});

box_3.addEventListener("click", () => {
    // body.style.backgroundColor = "blueviolet";
    let toggle = body.classList.toggle("box-3");
    let toggle2 = true;

    if (toggle && toggle2) {
        box_3.innerHTML = "<h1>ON</h1>";
        color_heading1.style.backgroundColor = "blueviolet";
        color_heading2.style.backgroundColor = "blueviolet";
    } else {
        box_3.innerHTML = "<h1>OFF</h1>";
        color_heading1.style.backgroundColor = "grey";
        color_heading2.style.backgroundColor = "grey";
    }
});

box_4.addEventListener("click", () => {
    // body.style.backgroundColor = "aqua";
    let toggle = body.classList.toggle("box-4");
    let toggle2 = true;

    if (toggle && toggle2) {
        box_4.innerHTML = "<h1>ON</h1>";
        color_heading1.style.backgroundColor = "aqua";
        color_heading2.style.backgroundColor = "aqua";
    } else {
        box_4.innerHTML = "<h1>OFF</h1>";
        color_heading1.style.backgroundColor = "grey";
        color_heading2.style.backgroundColor = "grey";
    }
});
