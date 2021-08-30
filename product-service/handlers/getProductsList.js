const fs = require('fs');
const path = require('path');

async function getProductsList(event) {
  const products = fs.readFileSync(path.resolve(__dirname, '../products.json'), 'utf-8');
    return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(products),
  };
}

module.exports = getProductsList;
