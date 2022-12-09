const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
};

function checkToken(req, res) {
    console.log('req.user', req.user);
    res.json(req.exp);
}

async function create(req, res) {
    try {
        // Add the user to the db
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        console.log(req.body)
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        const token = createJWT(user);
        if (!match) throw new Error();
        res.json(token);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

/*--- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}