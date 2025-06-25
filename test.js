function countSuchPair(N, arr) {
  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  // Check all pairs (i, j) with i < j
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      let sum = arr[i] + arr[j];
      if (isPrime(sum)) {
        count++;
      }
    }
  }
  console.log(count);
}