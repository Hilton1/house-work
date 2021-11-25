const { Router } = require('express');
const ResidentController = require('./controllers/ResidentController');

const router = Router();

router.get('/residents', ResidentController.index);
router.get('/residents/:id', ResidentController.show);
router.post('/residents', ResidentController.store);
router.put('/residents/:id', ResidentController.update);

module.exports = router;
