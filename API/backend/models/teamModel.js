const mongoose = require('mongoose')

const teamSchema = mongoose.Schema(
    {
        name: {
        type: String,
        required: [true, 'Please add a name value'],
        },
        thumbnail: {
            type: String,
            required: [true, 'Please add Thumbnail value']
        },
        players: {
            type: Array,
            required: [true, 'Please add players value'],
            ref: 'players',
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('teams', teamSchema)