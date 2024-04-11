const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite um número: ', (n) => {
  // Criar um array para armazenar os valores
  const list = [];
  // Preencher o array com os valores de 0 a n-1
  for (let i = 0; i < n; i++) {
    list.push(i);
  }
  // Imprimir o array formatado
  process.stdout.write('[');
  for (let i = 0; i < list.length; i++) {
    process.stdout.write(`${list[i]}`);
    if (i < list.length - 1) {
      process.stdout.write(', ');
    }
  }
  console.log(']');
  rl.close();
});
