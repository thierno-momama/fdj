const express = require("express")
const router = express.Router()
const { getTeams, setTeams, updateTeams, deleteTeams } = require("../controllers/teamController")

router.route('/').get(getTeams).post(setTeams)
router.route('/:id').put(updateTeams).delete(deleteTeams)

module.exports = router