const { lfmGetUser } = require('../../functions.js');

export default async function request(req, res) {
    // const lastFMKey = process.env.LASTFM_TOKEN;

    let data = await lfmGetUser('chriswonton');

    res.status(200).json(data.name);
}