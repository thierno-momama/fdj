const express = require("express")
const router = express.Router()
const { getChamps, setChamps, updateChamps, deleteChamps } = require("../controllers/champController")

router.route('/').get(getChamps).post(setChamps)
router.route('/:id').put(updateChamps).delete(deleteChamps)

module.exports = router