// importar o mongodb
const mongo = require('mongodb');

let connMongoDB = function() {
  console.log('Entrou na função de conexão');
  let db = new mongo.Db(
    'got',
    new mongo.Server(
      'localhost', //string onde encontra o banco
      27017, //porta de conexao
      {}
    ),
    {}
  );
  return db;
}

module.exports = function() {
  return connMongoDB;
};
