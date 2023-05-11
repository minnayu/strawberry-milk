const { lfmGetUser, lfmGetRecent } = require('../../../functions.js');

export default async function handler(req, res) {
    const { username } = req.query;
    let userData = await lfmGetUser(username);
    let trackData = await lfmGetRecent(username);
    userData.recentTracks = trackData
    res.status(200).json(userData);
}