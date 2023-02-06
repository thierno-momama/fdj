const { Double, Decimal128 } = require('bson')
const mongoose = require('mongoose')

const playerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add name']
        },
        position: {
            type: String,
            required: [true, 'Please add position']
        },
        thumbnail: {
            type: String,
            required: [true, 'Please add thumbnail']
        },
        signin: {
            amount: {
                type: Decimal128,
                required: [true, 'Please add amount']
            },
            currency: {
                type: String,
                required: [true, 'Please add currency']
            }
        },
        born: {
            type: Date,
            required: [true, 'Please add born']
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('players', playerSchema)