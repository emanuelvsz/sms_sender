const twilio = require('twilio');

// Substitua esses valores pelas suas credenciais
const accountSid = 'ACfa70411a45332485300bc7ba963eb400';
const authToken = 'a6c17ec76c652d47ebdac6ad951e2f88';

const client = new twilio(accountSid, authToken);

const toNumber = '+5582996955454';
const messageBody = 'Olá, esta é uma mensagem de teste!';

client.messages
  .create({
     body: messageBody,
     from: '+16185982646',
     to: toNumber
   })
  .then(message => console.log(`Mensagem enviada com SID: ${message.sid}`))
  .catch(error => console.error(`Erro ao enviar a mensagem: ${error.message}`));
