const BucketListItem = require('../../models/bucketListItem');

module.exports = {
    create,
    index,
    remove
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