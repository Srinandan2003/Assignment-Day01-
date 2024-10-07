// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; // Found a divisor
    }
    return true; // No divisors found, num is prime
}

// Get user input
const number = parseInt(prompt("Enter a number to check if it's prime:"));

// Check and display result
if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
} else {
    console.log(`${number} is not a prime number.`);
}
