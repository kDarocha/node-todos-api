const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');

const id = '5b476a470c70672be09d28e5';

if (!ObjectID.isValid(id)) {
  return console.log('ID not valid');
}

/*Todo.find({
  _id: id
}).then(todos => {
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log('Todo', todo);
});*/

Todo.findById(id).then(todo => {
  if (!todo) {
    return console.log('Id not found');
  }

  console.log('Todo', todo);
}).catch(e => console.log(e));
