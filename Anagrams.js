function isAnagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }
   a = a.toLowerCase();
  b = b.toLowerCase();
  const frequencyA = new Map();
  const frequencyB = new Map();
    for (let i = 0; i < a.length; i++) {
    const chA = a.charAt(i);
    const chB = b.charAt(i);
    frequencyA.set(chA, (frequencyA.get(chA) || 0) + 1);
    frequencyB.set(chB, (frequencyB.get(chB) || 0) + 1);
  }
    return mapEqual(frequencyA, frequencyB);
}
function mapEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
    for (const [key, value] of map1) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
    return true;
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite a primeira string: ', (a) => {
  rl.question('Digite a segunda string: ', (b) => {
    const result = isAnagram(a, b);
    if (result) {
      console.log("Anagrams");
    } else {
      console.log("Not Anagrams");
    }
    rl.close();
  });
});
