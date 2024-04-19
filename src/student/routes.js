const {Router} = require('express')
const controller = require('./controller')
const router = Router()


router.post("/", controller.addStudent);
router.get('/' , controller.getStudents);
router.get('/:id' , controller.getStudentById);
router.put('/:id', controller.updateStudent)
router.delete('/:id', controller.removeStudent)

module.exports = router;

