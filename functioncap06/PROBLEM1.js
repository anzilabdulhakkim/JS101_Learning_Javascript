function check_prime(num) {
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++;
      break;
    }
  }
  if (count === 0 && num > 1) {
    console.log(num, "is a prime number");
  } else {
    console.log(num, "is not a prime number");
  }
}
check_prime(2);

