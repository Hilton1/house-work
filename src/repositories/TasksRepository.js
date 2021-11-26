const { v4 } = require('uuid');

let tasks = [
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

  findById(id) {
    return new Promise((resolve) => {
      resolve(tasks.find((task) => task.id === id));
    });
  }

  create(description) {
    return new Promise((resolve) => {
      const newTask = {
        id: v4(),
        description,
      };

      tasks.push(newTask);
      resolve(newTask);
    });
  }

  update({ id, description }) {
    return new Promise((resolve) => {
      const updatedTask = {
        id,
        description,
      };

      tasks = tasks.map((task) => (
        task.id === id ? updatedTask : task
      ));

      resolve(updatedTask);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      tasks = tasks.filter((task) => task.id !== id);
      resolve();
    });
  }
}

module.exports = new TasksRepository();
