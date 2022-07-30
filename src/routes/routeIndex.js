const router = require("express").Router();
const controller = require("../controller/controllerIndex");

router.get("/", controller.get);
router.post("/", controller.post);

module.exports = router;
