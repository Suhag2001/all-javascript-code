// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  function findNthMissingPrime(list, n) {
    const sortedPrimes = list.filter(isPrime).sort((a, b) => a - b);
    const missingPrimes = [];
  
    for (let i = 1; missingPrimes.length < n; i++) {
      if (!sortedPrimes.includes(sortedPrimes[sortedPrimes.length - i])) {
        missingPrimes.push(sortedPrimes[sortedPrimes.length - i]);
      }
    }
  
    return missingPrimes[n - 1];
  }
  
  // Example usage:
  const unsortedList = [11,13,2,3];
  const n = 2; // Find the 3rd missing prime number (3rd largest prime)
  const nthMissingPrime = findNthMissingPrime(unsortedList, n);
  console.log(nthMissingPrime); // Output will be 13
  