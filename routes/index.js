const router = require("express").Router();
const NodemailerRoutes = require("./NodemailerAPI");

router.use(NodemailerRoutes);

module.exports = router;