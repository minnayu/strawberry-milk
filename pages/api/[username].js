const { lfmGetUser, lfmGetRecent, lfmGetTop } = require('/functions.js');

export default async function handler(req, res) {
    const { username } = req.query;
    let userData = await lfmGetUser(username);
    let trackData = await lfmGetRecent(username);   
    userData.recentTracks = trackData

    let topTracksSevenDays = await lfmGetTop(username, '7day', 'tracks')
    let topTracksOneMonth = await lfmGetTop(username, '1month', 'tracks')
    let topTracksYear = await lfmGetTop(username, '12month', 'tracks')

    userData.topTracks = {}
    userData.topTracks.sevenDays = topTracksSevenDays
    userData.topTracks.oneMonth = topTracksOneMonth
    userData.topTracks.year = topTracksYear

    let topArtistSevenDays = await lfmGetTop(username, '7day', 'artists')
    let topArtistOnemonth = await lfmGetTop(username, '1month', 'artist')
    let topArtistYear = await lfmGetTop(username, '12month', 'artist')

    userData.topArtists = {}
    userData.topArtists.sevenDays = topArtistSevenDays

    res.status(200).json(userData);
}