const db = require('../../database/index');

class ResidentsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const rows = await db.query(`
      SELECT residents.*, tasks.name AS task_name
      FROM residents
      LEFT JOIN tasks ON tasks.id = residents.task_id
      ORDER BY residents.name ${direction}
    `);
    return rows;
  }

  async findById(id) {
    const [row] = await db.query(`
      SELECT residents.*, tasks.name AS task_name
      FROM residents
      LEFT JOIN tasks ON tasks.id = residents.task_id
      WHERE residents.id = $1
    `, [id]);

    return row;
  }

  async findByCPF(cpf) {
    const [row] = await db.query(`
      SELECT * FROM residents
      WHERE cpf = $1
    `, [cpf]);

    return row;
  }

  async create({
    name, cpf, phone, task_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO residents(name, cpf, phone, task_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [name, cpf, phone, task_id]);

    return row;
  }

  async update(id, {
    name, cpf, phone, task_id,
  }) {
    const [row] = await db.query(`
      UPDATE residents
      SET name = $1, cpf = $2, phone = $3, task_id = $4
      WHERE id = $5
      RETURNING *
    `, [name, cpf, phone, task_id, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM residents WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new ResidentsRepository();
