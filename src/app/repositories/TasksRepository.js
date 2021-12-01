const { v4 } = require('uuid');
const db = require('../../database');

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
  async findAll() {
    const rows = await db.query('SELECT * FROM tasks');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM tasks
      WHERE ID = $1
    `, [id]);

    return row;
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
