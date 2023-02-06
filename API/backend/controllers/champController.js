const asyncHandler = require("express-async-handler")

const Champ = require("../models/champModel")
const Team = require("../models/teamModel")
//@desc Get teams
//@route GET /api/v1/teams
//@access Private
const getChamps = asyncHandler( async(req, res) => {
    const champs = await Champ.find({})

    res.status(200).json(champs)
    // res.status(200).json({message: 'Get Teams'})
})

//@desc Post Teams
//@route POST /api/v1/teams
//@access Private
const setChamps = asyncHandler( async(req, res) => {

    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a name field')
    }

    
      
    const champ = await Champ.create({
        name: req.body.name,
        sport: req.body.sport,
        teams: req.body.teams
    })


    res.status(200).json(champ)
    // res.status(200).json({message: 'Set post Teams'})
})

//@desc Update player
//@route PUT /api/v1/teams/:id
//@access Private
const updateChamps = asyncHandler( async(req, res) => {

    const champs = await Champ.findById(req.params.id)
    if(!champs){
        res.status(400)
        throw new Error('Champs not found')
    }
    const updatedChamp = await Champ.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedChamp)
    // res.status(200).json({message: `Update Teams ${req.params.id}`})
})

//@desc Delete Teams
//@route DELETE /api/v1/teams/:id
//@access Private
const deleteChamps = asyncHandler( async(req, res) => {

    const champ = await Champ.findById(req.params.id)

    if (!champ) {
        res.status(400)
        throw new Error('Champ not found')
    }
    await champ.remove()

    res.status(200).json({ id: req.params.id })

    // res.status(200).json({message: `Delete teams ${req.params.id}`})
})


module.exports = {
    getChamps,
    setChamps,
    updateChamps,
    deleteChamps
}