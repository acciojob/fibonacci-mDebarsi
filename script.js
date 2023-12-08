function fibonacci(num) {
// your code here
	  if (num === 0) return 0;
  if (num === 1) return 1;

  let prev = 0;
  let current = 1;

  for (let i = 2; i <= num; i++) {
    const temp = current;
    current += prev;
    prev = temp;
  }

  return prev;
}

module.exports = fibonacci;
