const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const password = "";

const MongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://User:${password}@cluster0.p2zd6.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
  )
    .then((client) => {
      console.log("DB connected.");
      callback(client);
    })
    .catch(console.log);
};

module.exports = MongoConnect;