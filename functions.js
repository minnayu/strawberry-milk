const apiKey = process.env.LASTFM_TOKEN;
const rootURL = 'http://ws.audioscrobbler.com/2.0';

// Gets the User object from Last.FM API.
async function lfmGetUser(lastFMUser) {
    let response = await fetch(`${rootURL}/?method=user.getinfo&user=${lastFMUser}&api_key=${apiKey}&format=json`);
    let data = await response.json();
    console.log(data)
    return data.user;
}

// Gets most recent plays from Last.FM per user.
async function lfmGetRecent(lastFMUser) {
    let response = await fetch(`${rootURL}/?method=user.getrecenttracks&user=${lastFMUser}&api_key=${apiKey}&format=json`);
    let data = await response.json();
    return data.recenttracks.track;
}

// Gets a user's now playing track.
async function lfmGetNowPlaying(lastFMUser) {
    let recent = await lfmGetRecent(lastFMUser);
    return recent[0];
}

// Gets track info by user.
async function lfmGetTrackInfo(lastFMUser, artist, track) {
    let response = await fetch(`${rootURL}/?method=track.getinfo&api_key=${apiKey}&artist=${artist.replace(`&`, `\%26`)}&track=${track.replace(`&`, `\%26`)}&user=${lastFMUser}&format=json`);
    let data = await response.json();
    return data.track;
}

// Gets artist info by user.
async function lfmGetArtistInfo(lastFMUser, artist) {
    let response = await fetch(`${rootURL}/?method=artist.getinfo&api_key=${apiKey}&artist=${artist}&user=${lastFMUser}&format=json`);
    let data = await response.json();
    return data.artist;
}

// Gets album info by user.
async function lfmGetAlbumInfo(lastFMUser, artist, album) {
    let response = await fetch(`${rootURL}/?method=album.getinfo&api_key=${apiKey}&artist=${artist}&album=${album}&user=${lastFMUser}&format=json`);
    let data = await response.json();
    return data.album;
}

// Gets top tracks per user.
async function lfmGetTop(lastFMUser, period, type) {
    let response = await fetch(`${rootURL}/?method=user.gettop${type}&user=${lastFMUser}&period=${period}&api_key=${apiKey}&format=json`);
    let data = await response.json();
    // console.log(data);
    if (type == 'tracks') return data.toptracks.track;
    if (type == 'artists') return data.topartists.artist;
    if (type == 'albums') return data.topalbums.album;
}

// module.exports = { error, lfmGetUsername, lfmGetUser, lfmGetRecent, lfmGetNowPlaying, lfmGetTrackInfo, lfmGetArtistInfo, lfmGetAlbumInfo, lfmGetTop, lfmArtistSearch, lfmTrackSearch, lfmAlbumSearch }
module.exports = { lfmGetUser, lfmGetRecent, lfmGetNowPlaying, lfmGetTrackInfo, lfmGetArtistInfo, lfmGetAlbumInfo, lfmGetTop  }