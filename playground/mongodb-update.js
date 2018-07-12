// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to MongoDb server');

  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b445c78a167e82bdc472d1f')
  }, {
    $set: {
      completed: false,
    }
  }, {
    returnOriginal: false
  }).then(result => {
    console.log(result);
  });

  client.close();
});
