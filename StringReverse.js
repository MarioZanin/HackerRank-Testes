const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite uma string: ', (A) => {
  let isPalindrome = true;
  const length = A.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
    if (A.charAt(i) !== A.charAt(length - i - 1)) {
      isPalindrome = false;
      break;
    }
  }
  if (isPalindrome) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  rl.close();
});
