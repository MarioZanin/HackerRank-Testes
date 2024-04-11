const readline = require('readline');
const { format } = require('currency-formatter');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite o pagamento: ', (payment) => {
  // Formatar o pagamento em diferentes moedas
  const us = format(parseFloat(payment), { code: 'USD' });
  const india = format(parseFloat(payment), { code: 'INR' });
  const china = format(parseFloat(payment), { code: 'CNY' });
  const france = format(parseFloat(payment), { code: 'EUR' });
  console.log("US: " + us);
  console.log("India: " + india);
  console.log("China: " + china);
  console.log("France: " + france);
  rl.close();
});
