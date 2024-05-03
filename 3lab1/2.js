function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(isPrime(7)); // Поверне true, бо 7 є простим числом
  console.log(isPrime(12)); // Поверне false, бо 12 не є простим числом
  