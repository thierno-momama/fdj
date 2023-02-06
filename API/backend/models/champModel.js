const mongoose = require('mongoose')

const champSchema = mongoose.Schema(
    {
        name: {
        type: String,
        required: [true, 'Please add a name value'],
        },
        sport: {
            type: String,
            required: [true, 'Please add sport value']
        },
        teams: {
            type: Array,
            required: [true, 'Please add teams value'],
            ref: 'teams',
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('leagues', champSchema)