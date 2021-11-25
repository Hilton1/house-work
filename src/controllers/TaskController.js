const TasksRepository = require('../repositories/TasksRepository');

class TaskController {
  async index(request, response) {
    const tasks = await TasksRepository.findAll();

    return response.json(tasks);
  }

  async show(request, response) {
    const { id } = request.params;

    const task = await TasksRepository.findById(id);

    return response.json(task);
  }

  async store(request, response) {
    const { description } = request.body;

    const task = await TasksRepository.create(description);

    return response.json(task);
  }
}

module.exports = new TaskController();
