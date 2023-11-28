const axios = require('axios');

const apiUrl = 'http://localhost:3000/api/transactions';

async function sendTransaction(idempotencyId, amount, type) {
  try {
    await axios.post(apiUrl, { idempotencyId, amount, type });
    console.log('Transação enviada com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar transação:', error.message);
  }
}

for (let i = 1; i <= 100; i++) {
  const transaction = {
    idempotencyId: `id-${i}`,
    amount: Math.random() * 100,
    type: i % 2 === 0 ? 'credit' : 'debit',
  };

  await sendTransaction(transaction.idempotencyId, transaction.amount, transaction.type);
}
