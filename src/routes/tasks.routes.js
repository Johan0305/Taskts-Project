const router = require("express").Router();
const tasksController = require("../controllers/task.controller");
const taskController = require("../controllers/task.controller");

router.get("/allTasks", tasksController.getAllTasks);
router.get("/oneTask/:id", tasksController.getTask);
router.route("/newTask").post(taskController.createTask);
router.put("/updateTask", taskController.updateTask);
router.delete("/destroyTask", taskController.destroyTask);

module.exports = router;
