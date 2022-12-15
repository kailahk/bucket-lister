const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bucketListItemSchema = new Schema({
    listItemTitle: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    completed: {type: Boolean},
    listItemDate: {type: Date},
    listItemLocation: {type: String},
    listItemNote: {type: String},
    listItemLink: {type: String},
    listItemPeople: {type: String}
}, {
    timestamps: true
})

module.exports = mongoose.model('BucketListItem', bucketListItemSchema);