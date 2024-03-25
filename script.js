const input = document.getElementById('user-input');
const results = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

/* const numberRegex = /(1-)?\d{3}(-|\s)?\d{3}(-|\s)?\d{4}/; */
/* const numberRegex = /(1-)?[0-9]{3}(-|\s)?[0-9]{3}(-|\s)?[0-9]{4}/; */

const numberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;
const validNumber = (input) => numberRegex.test(input.value);
const displayResult = () => {
    const userInput = input.value;
    if(userInput === '') {
        alert('Please provide a phone number');
        return;
    }
    else if(validNumber(input) === true) {
        const userInput = input.value;
        const divResults = results;
        divResults.textContent = `Valid US number: ${userInput}`;
        input.value = '';
        return;
    }
    else {
        const userInput = input.value;
        const divResults = results;
        divResults.textContent = `Invalid US number: ${userInput}`;
        input.value = '';
        return;
    }
}

const clearResults = () => results.textContent = '';

checkBtn.addEventListener('click', displayResult);
clearBtn.addEventListener('click', clearResults);