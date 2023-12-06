const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const records = event.Records;

  for (const record of records) {
    const messageBody = JSON.parse(record.body);

    const params = {
      TableName: 'tabela-dynamodb',
      Item: messageBody,
    };

    await dynamoDB.put(params).promise();
  }

  return { statusCode: 200, body: 'Mensagens processadas com sucesso!' };
};
