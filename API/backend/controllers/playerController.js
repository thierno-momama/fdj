const asyncHandler = require('express-async-handler')


const Player = require("../models/playerModel")
//@desc Get players
//@route GET /api/v1/players
//@access Private
const getPlayers = asyncHandler( async(req, res) => {
    const players = await Player.find({})
    res.status(200).json(players)
    // res.status(200).json({message: 'Set get Players'})
})

//@desc Post Players
//@route POST /api/v1/players
//@access Private
const setPlayers = asyncHandler( async(req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('Please add a name field')
    }

    
      
    const player = await Player.create({
        name: req.body.name,
        position: req.body.position,
        thumbnail: req.body.thumbnail,
        signin: {
            amount: req.body.amount,
            currency: req.body.currency
        },
        born: req.body.born
    })

    res.status(200).json(player)
    // res.status(200).json({message: 'Set post Players'})
})

//@desc Update player
//@route PUT /api/v1/players/:id
//@access Private
const updatePlayer = asyncHandler( async(req, res) => {
    
    const player = await Player.findById(req.params.id)
    if(!player){
        res.status(400)
        throw new Error('Player not found')
    }
    const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    // res.status(200).json({message: `Update player ${req.params.id}`})
    res.status(200).json(updatedPlayer)
})

//@desc Delete player
//@route DELETE /api/v1/players/:id
//@access Private
const deletePlayer = asyncHandler( async(req, res) => {
    const player = await Player.findById(req.params.id)

    if (!player) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await player.remove()

    res.status(200).json({ id: req.params.id })
    // res.status(200).json({message: `Delete player ${req.params.id}`})
})


module.exports = {
    getPlayers,
    setPlayers,
    updatePlayer,
    deletePlayer
}