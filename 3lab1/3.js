function sumNumbers(n) {
    if (n >= 0) {
      return (n * (n + 1)) / 2;
    } else {
      return (n * (n - 1)) / -2 + 1;
    }
  }

  console.log(sumNumbers(5)); // Поверне 15, бо 1 + 2 + 3 + 4 + 5 = 15
  console.log(sumNumbers(-3)); // Поверне -6, бо 1 + 0 + (-1) + (-2) + (-3) = -6
  