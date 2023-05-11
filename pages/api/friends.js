const { lfmGetFriends } = require('../../../functions.js');

export default async function handler(req, res) {
    // where to get username from
    let data = await lfmGetFriends(username);
    res.status(200).json(data);
}