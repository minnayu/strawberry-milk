const apiKey = process.env.LASTFM_TOKEN;
const rootURL = 'https://ws.audioscrobbler.com/2.0';

// Gets the User object from Last.FM API.
async function lfmGetUser(lastFMUser) {
    let response = await fetch(`${rootURL}/?method=user.getinfo&user=${lastFMUser}&api_key=${apiKey}&format=json`);
    let data = await response.json();
    // console.log(data);
    return data.user;
}

// Gets most recent plays from Last.FM per user.
async function lfmGetRecent(lastFMUser) {
    let response = await fetch(`${rootURL}/?method=user.getrecenttracks&user=${lastFMUser}&api_key=${apiKey}&limit=10&page=1&format=json`);
    let data = await response.json();
    let tracks = data.recenttracks.track;
    let trackData = [];

    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i];
      let artist = track.artist['#text'];
      let url = track.url
      let name = track.name;
      let image = track.image[2]['#text'];
      let nowplaying = false;

        if (track.hasOwnProperty('@attr') && track['@attr'].nowplaying) {
            nowplaying = true;
        }

        trackData.push({ artist, url, name, image, nowplaying });
    }
  
    return trackData;
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
    // console.log('---------- lfmGetTop ----------');
    let response = await fetch(`${rootURL}/?method=user.gettop${type}&user=${lastFMUser}&period=${period}&api_key=${apiKey}&limit=10&page=1&format=json`);
    let data = await response.json();
    let image = 'https://consumer.huawei.com/content/dam/huawei-cbg-site/en/support/new-huawei-manager/img/icon-music.png'

    switch (type) {
        case 'tracks':
            return Promise.all(data.toptracks.track.map(async (track) => {
                // console.log('tracks');
                let trackInfo = await lfmGetTrackInfo(lastFMUser, track.artist.name, track.name);
                if (trackInfo && trackInfo.album && trackInfo.album.image && trackInfo.album.image[2] && trackInfo.album.image[2]['#text']) {
                    image = trackInfo.album.image[2]['#text'];
                }
                return {
                    name: track.name,
                    artist: track.artist.name,
                    url: track.url,
                    playcount: track.playcount,
                    image: image,
                };
        }));
        case 'artists':
            if(data.topartists) {
                return Promise.all(data.topartists.artist.map(async (artist) => {
                // console.log('artists');
                let artistInfo = await lfmGetArtistInfo(lastFMUser, artist.name);
                if (artistInfo && artistInfo.image && artistInfo.image[2] && artistInfo.image[2]['#text']) {
                    image = artistInfo.image[2]['#text'];
                }
                    return {
                        name: artist.name,
                        playcount: artist.playcount,
                        url: artist.url,
                        image: image
                    };
                }));
            }
        case 'albums':
            if(data.topalbums) {
                // console.log('albums');
                return Promise.all(data.topalbums.album.map(async (album) => {
                    if (album && album.image && album.image[2]['#text']) image = album.image[2]['#text'];
                    return {
                        name: album.name,
                        playcount: album.playcount,
                        url: album.url,
                        image: image
                    };
                 }));
             }
    }
}   

async function lfmGetFriends(lastFMUser) {
    let response = await fetch(`${rootURL}/?method=user.getfriends&user=${lastFMUser}&api_key=${apiKey}&limit=10&page=1&format=json`);
    let data = await response.json();
    if (!data.friends) return;
    return Promise.all(
        data.friends.user.map(async (friend) => {
        let friendNowPlaying = await lfmGetNowPlaying(friend.name);
        let profilePicture = 'https://secure.gravatar.com/avatar/13a85474fe351743b7600c3389906212?s=174&d=mm&r=g'
        if (friend && friend.image && friend.image[2] && friend.image[2]['#text']) profilePicture = friend.image[2]['#text'];
        return {
            name: friend.name,
            url: friend.url,
            image: profilePicture,
            npTrack: friendNowPlaying.name,
            npArtist: friendNowPlaying.artist,
            npImage: friendNowPlaying.artist,
            npURL: friendNowPlaying.url,
            nowplaying: friendNowPlaying.nowplaying,
        }
    }));
}

// module.exports = { error, lfmGetUsername, lfmGetUser, lfmGetRecent, lfmGetNowPlaying, lfmGetTrackInfo, lfmGetArtistInfo, lfmGetAlbumInfo, lfmGetTop, lfmArtistSearch, lfmTrackSearch, lfmAlbumSearch }
module.exports = { lfmGetUser, lfmGetRecent, lfmGetNowPlaying, lfmGetTrackInfo, lfmGetArtistInfo, lfmGetAlbumInfo, lfmGetTop, lfmGetFriends  }