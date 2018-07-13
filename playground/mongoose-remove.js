const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

/*Todo.remove({}).then((results) => {
  console.log(results);
});*/

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

Todo.findByIdAndRemove('5b477b0a0e87603cb8e7cf28').then(todo => {
  console.log(todo);
});
