const { v4 } = require('uuid');

const tasks = [
  {
    id: v4(),
    description: 'Lavar os pratos',
  },
  {
    id: v4(),
    description: 'Limpar a casa',
  },
];

class TasksRepository {
  findAll() {
    return new Promise((resolve) => resolve(tasks));
  }
}

module.exports = new TasksRepository();
