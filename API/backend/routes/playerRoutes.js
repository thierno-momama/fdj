const express = require("express")
const router = express.Router()
const { getPlayers, setPlayers, updatePlayer, deletePlayer } = require("../controllers/playerController")

router.route('/').get(getPlayers).post(setPlayers)
router.route('/:id').put(updatePlayer).delete(deletePlayer)

module.exports = router
