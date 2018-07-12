// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
  if (error) {
    return console.log('Unable to connect to mongodb server');
  }

  console.log('Connected to MongoDb server');

  const db = client.db('TodoApp');

  /*db.collection('Todos').deleteOne({
    text: 'Eat lunch'
  }).then((result) => {
    console.log(result);
  });*/

  /*db.collection('Todos').findOneAndDelete({completed: false}).then((response) => {
    console.log(response);
  });*/

  db.collection('Users').deleteMany({name: 'Kevin'});

  client.close();
});
