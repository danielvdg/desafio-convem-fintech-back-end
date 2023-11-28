import AWS from 'aws-sdk'
import Transaction from '../models/Transaction';

AWS.config.update({
    region:'sua-regiao'
})

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

class TransactionController {
    async createTransaction(req, res)  {
     
        const{idempotencyId, amount, type} = req.body;
        const transactionBody = new Transaction(idempotencyId,amount,type);

        const params = {
            MessageBody: JSON.stringify(transactionBody),
            QueueUrl: 'sua-url-da-fila-sqs'
        };

        try {
            await sqs.sendMessage(params).promise();
            res.status(201).json({message:'Transação recebida com sucesso!'})
        } catch (error) {
            console.error('Erro ao enviar mensagem para a fila SQS:', error);
            res.status(500).json({error:'Erro interno do servidor'});
        }

    }
}

export default new TransactionController();