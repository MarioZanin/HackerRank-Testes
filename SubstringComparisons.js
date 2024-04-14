function getSmallestAndLargest(s, k) {
  let smallest = s.substring(0, k);
  let largest = s.substring(0, k);
  for (let i = 1; i <= s.length - k; i++) {
    const substr = s.substring(i, i + k);
    if (substr.localeCompare(smallest) < 0) {
      smallest = substr;
    }
    if (substr.localeCompare(largest) > 0) {
      largest = substr;
    }
  }
  return smallest + '\n' + largest;
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite a string: ', (s) => {
  rl.question('Digite o tamanho da substring (k): ', (k) => {
    const result = getSmallestAndLargest(s, parseInt(k));
    console.log(result);
    rl.close();
  });
});
