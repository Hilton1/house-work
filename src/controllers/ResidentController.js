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

  // store(request, response) {

  // }

  // update(request, response) {

  // }

  // delete(reqiest, response) {

  // }
}

module.exports = new ResidentController();
