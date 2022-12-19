const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bucketListItemSchema = new Schema({
    listItemTitle: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    completed: {type: Boolean, default: false},
    listItemDate: {type: String, default: 'No date added yet'},
    listItemLocation: {type: String, default: 'No location added yet'},
    listItemNote: {type: String},
    listItemLink: {type: String},
    listItemPeople: {type: String, default: 'No people added yet'},
}, {
    timestamps: true
})

module.exports = mongoose.model('BucketListItem', bucketListItemSchema);