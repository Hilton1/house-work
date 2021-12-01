const { Router } = require('express');
const ResidentController = require('./app/controllers/ResidentController');
const TaskController = require('./app/controllers/TaskController');

const router = Router();

router.get('/residents', ResidentController.index);
router.get('/residents/:id', ResidentController.show);
router.post('/residents', ResidentController.store);
router.put('/residents/:id', ResidentController.update);
router.delete('/residents/:id', ResidentController.delete);

router.get('/tasks', TaskController.index);
router.get('/tasks/:id', TaskController.show);
router.post('/tasks', TaskController.store);
router.put('/tasks/:id', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

module.exports = router;
