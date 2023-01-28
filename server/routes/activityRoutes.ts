const express = require("express");

const router = express.Router();

const { getActivities } = require("../controllers/Activity/activityController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getActivities);

export default router;
