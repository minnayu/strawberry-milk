const { lfmGetUser } = require('../../functions.js');

export default async function handler(req, res) {
    const { username } = req.query;
    let data = await lfmGetUser(username);
    res.status(200).json(data);
}