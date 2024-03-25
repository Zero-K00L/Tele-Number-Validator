const input = document.getElementById('user-input');
const results = document.getElementById('results-list');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

const numberRegex = /(1-)?\d{3}(-|\s)?\d{3}(-|\s)?\d{4}/;
const validNumber = (input) => numberRegex.test(input.value);

const displayResult = () => {
    const userInput = input.value;
    if(userInput === '') {
        alert('Please provide a phone number');
        return;
    }
    else if(validNumber(input) === true) {
        const userInput = input.value;
        const liElement = document.createElement('li');
        liElement.textContent = `Valid US number: ${userInput}`;
        results.appendChild(liElement);
        liElement.classList.add('valid');
        input.value = '';
        return;
    }
    else {
        const userInput = input.value;
        const liElement = document.createElement('li');
        liElement.textContent = `Invalid US number: ${userInput}`;
        results.appendChild(liElement);
        liElement.classList.add('invalid');
        input.value = '';
        return;
    }
}

const clearResults = () => {
    Array.from(results.children).forEach(li => {
        li.remove();
    });
}

checkBtn.addEventListener('click', displayResult);
clearBtn.addEventListener('click', clearResults);