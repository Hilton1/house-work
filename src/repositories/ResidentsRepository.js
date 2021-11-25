const { v4 } = require('uuid');

let residents = [
  {
    id: v4(),
    name: 'Hilton',
    cpf: '08139280445',
    phone: '82999142756',
    task_id: v4(),
  },
  {
    id: v4(),
    name: 'Mizael',
    cpf: '00000000000',
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

  findByCPF(cpf) {
    return new Promise((resolve) => {
      resolve(residents.find((resident) => resident.cpf === cpf));
    });
  }

  create({
    name, cpf, phone, task_id,
  }) {
    return new Promise((resolve) => {
      const newResident = {
        id: v4(),
        name,
        cpf,
        phone,
        task_id,
      };

      residents.push(newResident);
      resolve(newResident);
    });
  }

  update(id, {
    name, cpf, phone, task_id,
  }) {
    return new Promise((resolve) => {
      const updatedResident = {
        id,
        name,
        cpf,
        phone,
        task_id,
      };

      residents = residents.map((resident) => (
        resident.id === id ? updatedResident : resident
      ));

      resolve(updatedResident);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      residents = residents.filter((resident) => resident.id !== id);
      resolve();
    });
  }
}

module.exports = new ResidentsRepository();
