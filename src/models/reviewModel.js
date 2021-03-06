

const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const reviewSchema = new mongoose.Schema({
    productId: {
        type: ObjectId,
        ref: 'product',
        required: true
    },
    reviewedBy: {
        type: String,
        required: true,
        trim: true
    },
    reviewedAt: {
        type: Date,
        required: true,
        default: new Date()
    },
    rating: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    review: {
        type: String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })
module.exports = mongoose.model('Review', reviewSchema)
