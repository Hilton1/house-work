const db = require('../../database');

class TasksRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
      SELECT * FROM tasks
      ORDER BY name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT * FROM tasks
      WHERE ID = $1
    `, [id]);

    return row;
  }

  async create(description) {
    const [row] = await db.query(`
      INSERT INTO tasks(name)
      VALUES ($1)
      RETURNING *
    `, [description]);

    return row;
  }

  async update(id, { name }) {
    const [row] = await db.query(`
      UPDATE tasks
      SET name = $1
      WHERE id = $2
      RETURNING *
    `, [name, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM tasks
      WHERE ID = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new TasksRepository();
