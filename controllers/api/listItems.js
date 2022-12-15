const BucketListItem = require('../../models/bucketListItem');

module.exports = {
    create,
    index
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