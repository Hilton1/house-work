const { v4 } = require('uuid');

const residents = [
  {
    id: v4(),
    name: 'Hilton',
    phone: '82999142756',
    task_id: v4(),
  },
  {
    id: v4(),
    name: 'Mizael',
    phone: '82000000000',
    task_id: v4(),
  },
];

class ResidentsRepository {
  findAll() {
    return new Promise((resolve) => resolve(residents));
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(residents.find((resident) => resident.id === id));
    });
  }
}

module.exports = new ResidentsRepository();
