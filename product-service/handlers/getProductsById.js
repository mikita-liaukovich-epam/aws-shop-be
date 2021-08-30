const fs = require('fs');
const path = require('path');

async function getProductsById(event) {
  const products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../products.json'), 'utf-8'));
  const productId = event.pathParameters && event.pathParameters.productId;

  const item = products.find(el => el.id === productId)

  const statusCode = item ? 200 : 404;

  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: item ? JSON.stringify(item) : "Item not found",
  };
}

module.exports = getProductsById;
