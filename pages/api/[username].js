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
    let topArtistOneMonth = await lfmGetTop(username, '1month', 'artists')
    let topArtistYear = await lfmGetTop(username, '12month', 'artists')

    userData.topArtists = {}
    userData.topArtists.sevenDays = topArtistSevenDays
    userData.topArtists.oneMonth = topArtistOneMonth
    userData.topArtists.year = topArtistYear

    let topAlbumSevenDays = await lfmGetTop(username, '7day', 'albums')
    let topAlbumOneMonth = await lfmGetTop(username, '1month', 'albums')
    let topAlbumYear = await lfmGetTop(username, '12month', 'albums')

    userData.topAlbums = {}
    userData.topAlbums.sevenDays = topAlbumSevenDays
    userData.topAlbums.oneMonth = topAlbumOneMonth
    userData.topAlbums.year = topAlbumYear

    res.status(200).json(userData);
}