const ResidentsRepository = require('../repositories/ResidentsRepository');

class ResidentController {
  async index(request, response) {
    const residents = await ResidentsRepository.findAll();

    return response.json(residents);
  }

  async show(request, response) {
    const { id } = request.params;

    const resident = await ResidentsRepository.findById(id);

    return response.json(resident);
  }

  async store(request, response) {
    const {
      name, cpf, phone, task_id,
    } = request.body;

    const residentExists = await ResidentsRepository.findByCPF(cpf);

    if (!name || !cpf) {
      return response.status(400).json({ error: 'Name and CPF are required!' });
    }

    if (residentExists) {
      return response.status(400).json({ error: 'CPF is already in use!' });
    }

    const resident = await ResidentsRepository.create({
      name, cpf, phone, task_id,
    });

    response.json(resident);
  }

  // update(request, response) {

  // }

  // delete(reqiest, response) {

  // }
}

module.exports = new ResidentController();
