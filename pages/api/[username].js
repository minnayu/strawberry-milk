const { lfmGetUser, lfmGetRecent, lfmGetTop } = require('/functions.js');

export default async function handler(req, res) {
    const { username } = req.query;
    let userData = await lfmGetUser(username);
    let trackData = await lfmGetRecent(username);   
    userData.recentTracks = trackData

    let topTracksSevenDays = await lfmGetTop(username, '7day', 'tracks')
    let topTracksMonth = await lfmGetTop(username, '1month', 'tracks')
    let topTracksYear = await lfmGetTop(username, '12month', 'tracks')
    let topTracksAll = await lfmGetTop(username, 'all', 'tracks')

    userData.topTracks = {}
    userData.topTracks.sevenDays = topTracksSevenDays
    userData.topTracks.month = topTracksMonth
    userData.topTracks.year = topTracksYear
    userData.topTracks.all = topTracksYear


    let topArtistsSevenDays = await lfmGetTop(username, '7day', 'artists')
    let topArtistsMonth = await lfmGetTop(username, '1month', 'artists')
    let topArtistsYear = await lfmGetTop(username, '12month', 'artists')
    let topArtistsAll = await lfmGetTop(username, 'all', 'artists')

    userData.topArtists = {}
    userData.topArtists.sevenDays = topArtistsSevenDays
    userData.topArtists.month = topArtistsMonth
    userData.topArtists.year = topArtistsYear
    userData.topArtists.all = topArtistsAll

    let topAlbumsSevenDays = await lfmGetTop(username, '7day', 'albums')
    let topAlbumsMonth = await lfmGetTop(username, '1month', 'albums')
    let topAlbumsYear = await lfmGetTop(username, '12month', 'albums')
    let topAlbumsAll = await lfmGetTop(username, 'all', 'albums')

    userData.topAlbums = {}
    userData.topAlbums.sevenDays = topAlbumsSevenDays
    userData.topAlbums.month = topAlbumsMonth
    userData.topAlbums.year = topAlbumsYear
    userData.topAlbums.all = topAlbumsAll

    res.status(200).json(userData);
}