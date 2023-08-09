//! Script for BMI Calculator 

// Algorithm
// 1. Stop the default behaviour of form.
// 2. Take values from input, using submit from HTML.
// 3. now type cast the strings to float



const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const bmiHTML = document.querySelector('.bmi');
    // console.log(height);
    // console.log(weight);

    if (height === '' || height < 0 || isNaN(height)) {
        bmiHTML.innerHTML = `Invalid Input!`;
        if (bmiHTML.innerHTML === `Invalid Input!`) {
            const red = document.getElementById('bmi');
            red.style.color = "red";
        } else {
            red.style.color = "#323232";
        }
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        bmiHTML.innerHTML = `Invalid Input!`;
    } else {
        const calculatedBmiCM = (weight / ((height * height) / 10000)).toFixed(2);  // in CM

        // put the calculatedBmiCM into the .bmi <div> in HTML
        bmiHTML.innerHTML = `<span>${calculatedBmiCM}</span>`;
    }

});