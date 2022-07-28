
const submit = document.getElementById('submit');


function imc () {
    const name = document.getElementById('name').value;
    const weight = document.getElementById('weight').value;
    const height = parseFloat(document.getElementById('height').value).toFixed(2);
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

        let imcV = (weight / Math.pow(height,2))*10000
        if (imcV >=10) {
            results.textContent = `${name} your IMC is ${imcV.toFixed(2)}. You're good!`
        }
        else {
        alert("Too bad")
        }
    }
}

submit.addEventListener('click', imc);
