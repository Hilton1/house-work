const ResidentsRepository = require('../repositories/ResidentsRepository');

class ResidentController {
  async index(request, response) {
    const residents = await ResidentsRepository.findAll();

    return response.json(residents);
  }

  async show(request, response) {
    const { id } = request.params;

    const resident = await ResidentsRepository.findById(id);

    if (!resident) {
      return response.status(404).json({ error: 'Resident not found!' });
    }

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

  async update(request, response) {
    const { id } = request.params;

    const {
      name, cpf, phone, task_id,
    } = request.body;

    const residentExists = await ResidentsRepository.findById(id);

    if (!residentExists) {
      return response.status(404).json({ error: 'Resident not found' });
    }

    if (!name || !cpf) {
      return response.status(400).json({ error: 'Name and CPF are required' });
    }

    const residentByCPF = await ResidentsRepository.findByCPF(cpf);
    if (residentByCPF && residentByCPF.id !== id) {
      return response.status(400).json({ error: 'This CPF is already in use' });
    }

    const resident = await ResidentsRepository.update(id, {
      name, cpf, phone, task_id,
    });

    return response.json(resident);
  }

  // delete(reqiest, response) {

  // }l
}

module.exports = new ResidentController();
