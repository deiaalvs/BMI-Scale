const submit = document.getElementById('submit');

function imc () {
    const name = document.getElementById('name').value;
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const results = document.getElementById('results');

    if (name === '') {
        results.textContent = "Name needed!"
    }

    else if (height === '') {
        results.textContent = "Height needed!"
    }

    else if (weight === '') {
        results.textContent = "Weight needed!"
    }

    else {
        let imcV = weight / Math.pow(height,2)

        if (imcV < 18.50) {
            results.textContent = `${name}, your BMI is ${imcV.toFixed(2)}. You're underweight!`
        }
        else if (imcV <= 24.99) {
            results.textContent = `${name}, your BMI is ${imcV.toFixed(2)}. You're good!`
        }
        else if (imcV <= 29.99) {
            results.textContent = `${name}, your BMI is ${imcV.toFixed(2)}. You're overweight!`
        }
        else if (imcV <= 34.99) {
            results.textContent = `${name}, your BMI is ${imcV.toFixed(2)}. You're obese!`
        }
        else if (imcV > 35.00) {
            results.textContent = `${name}, your BMI is ${imcV.toFixed(2)}. You're extremely obese!`
        }
    }
}

submit.addEventListener('click', imc);