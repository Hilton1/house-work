const TasksRepository = require('../repositories/TasksRepository');

class TaskController {
  async index(request, response) {
    const { orderBy } = request.query;
    const tasks = await TasksRepository.findAll(orderBy);

    return response.json(tasks);
  }

  async show(request, response) {
    const { id } = request.params;

    const task = await TasksRepository.findById(id);

    if (!task) {
      return response.status(404).json({ error: 'Task not found' });
    }

    return response.json(task);
  }

  async store(request, response) {
    const { description } = request.body;

    if (!description) {
      return response.status(400).json({ error: 'Description are required' });
    }

    const task = await TasksRepository.create(description);

    return response.json(task);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const taskExists = await TasksRepository.findById(id);

    if (!taskExists) {
      return response.status(404).json({ error: 'Task not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const task = await TasksRepository.update(id, { name });

    return response.json(task);
  }

  async delete(request, response) {
    const { id } = request.params;

    const taskExists = await TasksRepository.findById(id);

    if (!taskExists) {
      return response.status(404).json({ error: 'Task not found!' });
    }

    await TasksRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new TaskController();
