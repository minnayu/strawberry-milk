const { lfmGetUser } = require('../../functions.js');

export default async function request(req, res) {
    const { username } = req.query;
    let data = await lfmGetUser(username);
    res.status(200).json(data);
}