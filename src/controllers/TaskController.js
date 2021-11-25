const TasksRepository = require('../repositories/TasksRepository');

class TaskController {
  async index(request, response) {
    const tasks = await TasksRepository.findAll();

    return response.json(tasks);
  }
}

module.exports = new TaskController();
