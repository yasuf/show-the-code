// This is a simple JavaScript Frontend example
console.log('Hello, Frontend! JavaScript!');

function changeGreeting() {
    document.getElementById('greeting').innerText = 'Hello, JavaScript!';
}

// Function example
function greet(name) {
    return `Hello, ${name}!`;
}

// Call the function
console.log(greet('World'));
