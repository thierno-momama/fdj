const asyncHandler = require('express-async-handler')

const Team = require("../models/teamModel")
const Player = require("../models/playerModel")
//@desc Get teams
//@route GET /api/v1/teams
//@access Private
const getTeams = asyncHandler( async(req, res) => {
    const teams = await Team.find({})

    res.status(200).json(teams)
    // res.status(200).json({message: 'Get Teams'})
})

//@desc Post Teams
//@route POST /api/v1/teams
//@access Private
const setTeams = asyncHandler( async(req, res) => {

    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a name field')
    }

    
      
    const team = await Team.create({
        name: req.body.name,
        thumbnail: req.body.thumbnail,
        players: req.body.players
    })


    res.status(200).json(team)
    // res.status(200).json({message: 'Set post Teams'})
})

//@desc Update player
//@route PUT /api/v1/teams/:id
//@access Private
const updateTeams = asyncHandler( async(req, res) => {

    const teams = await Team.findById(req.params.id)
    if(!teams){
        res.status(400)
        throw new Error('Teams not found')
    }
    const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedTeam)
    // res.status(200).json({message: `Update Teams ${req.params.id}`})
})

//@desc Delete Teams
//@route DELETE /api/v1/teams/:id
//@access Private
const deleteTeams = asyncHandler( async(req, res) => {

    const team = await Team.findById(req.params.id)

    if (!team) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await team.remove()

    res.status(200).json({ id: req.params.id })

    // res.status(200).json({message: `Delete teams ${req.params.id}`})
})


module.exports = {
    getTeams,
    setTeams,
    updateTeams,
    deleteTeams
}