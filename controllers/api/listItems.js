const BucketListItem = require('../../models/bucketListItem');

module.exports = {
    create,
    index,
    remove,
    edit
}

async function create(req, res) {
    req.body.user = req.user._id;
    const listItem = await BucketListItem.create(req.body);
    res.json(listItem);
}

async function index(req, res) {
    const listItems = await BucketListItem.find({user: req.user._id});
    res.json(listItems);
}

async function remove(req, res) {
    await BucketListItem.findOneAndDelete({_id: req.params.id, user: req.user._id});
    const listItems = await BucketListItem.find({user: req.user._id});
    res.json(listItems);
}

async function edit(req, res) {
    const updatedItem = await BucketListItem.findOneAndUpdate(
        {_id: req.params.id},
        {
            listItemTitle: req.body.listItemTitle, 
            listItemLocation: req.body.listItemLocation,
            listItemDate: req.body.listItemDate,
            listItemNote: req.body.listItemNote,
            listItemPeople: req.body.listItemPeople,
            listItemLink: req.body.listItemLink,
            completed: req.body.completed,
        },
        {new: true}
    );
    const listItems = await BucketListItem.find({user: req.user._id});
    res.json(listItems)
}