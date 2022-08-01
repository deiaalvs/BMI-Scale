const submit = document.getElementById('submit');

function bmi () {
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
        let bmiV = weight / Math.pow(height,2)

        if (bmiV < 18.50) {
            results.textContent = `${name}, your BMI is ${bmiV.toFixed(2)}. You're underweight!`
        }
        else if (bmiV <= 24.99) {
            results.textContent = `${name}, your BMI is ${bmiV.toFixed(2)}. You're good!`
        }
        else if (bmiV <= 29.99) {
            results.textContent = `${name}, your BMI is ${bmiV.toFixed(2)}. You're overweight!`
        }
        else if (bmiV <= 34.99) {
            results.textContent = `${name}, your BMI is ${bmiV.toFixed(2)}. You're obese!`
        }
        else if (bmiV > 35.00) {
            results.textContent = `${name}, your BMI is ${bmiV.toFixed(2)}. You're extremely obese!`
        }
    }
}

submit.addEventListener('click', bmi);