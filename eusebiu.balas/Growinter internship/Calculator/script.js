let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.querySelector('.display input').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.querySelector('.display input').value = displayValue;
}

function calculate() {
    console.log('Calculating expression:', displayValue);

    try {
       
        displayValue = displayValue.replace(/(\d+)%/g, function (match, p1) {
            return parseFloat(p1) / 100;
        });

        let result = eval(displayValue);
        console.log('Result:', result);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression result');
        }

        displayValue = result.toString();
        document.querySelector('.display input').value = displayValue;
    } catch (error) {
        console.error('Error evaluating expression:', error.message);
        displayValue = '';
        document.querySelector('.display input').value = 'Error';
    }
}


function toggleSign() {
    if (displayValue.startsWith('-')) {
        displayValue = displayValue.substring(1);
    } else {
        displayValue = '-' + displayValue;
    }
    document.querySelector('.display input').value = displayValue;
}

function isValidExpression() {
    let regex = /[^\d\+\-\*\/\.\%]/;
    if (regex.test(displayValue)) {
        console.error('Invalid characters in expression:', displayValue);
        return false;
    }
    return true;
}
