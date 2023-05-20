import { lfmGetUser, lfmGetRecent, lfmGetTop, lfmGetFriends } from '../../utils/functions';

export default async function handler(req, res) {
  // console.log('test');
  const { username } = req.query;
  let userData = await lfmGetUser(username);
  let trackData = await lfmGetRecent(username);
  userData.recentTracks = trackData;

  // top tracks api calls
  let [
    topTracksSevenDays,
    topTracksMonth,
    topTracksYear,
    topTracksAll
  ] = await Promise.all([
    lfmGetTop(username, '7day', 'tracks'),
    lfmGetTop(username, '1month', 'tracks'),
    lfmGetTop(username, '12month', 'tracks'),
    lfmGetTop(username, 'all', 'tracks')
  ]);

  userData.topTracks = {
    sevenDays: topTracksSevenDays,
    month: topTracksMonth,
    year: topTracksYear,
    all: topTracksAll
  };

  // console.log(userData);

  // top artists api calls
  let [
    topArtistsSevenDays,
    topArtistsMonth,
    topArtistsYear,
    topArtistsAll
  ] = await Promise.all([
    lfmGetTop(username, '7day', 'artists'),
    lfmGetTop(username, '1month', 'artists'),
    lfmGetTop(username, '12month', 'artists'),
    lfmGetTop(username, 'all', 'artists')
  ]);

  userData.topArtists = {
    sevenDays: topArtistsSevenDays,
    month: topArtistsMonth,
    year: topArtistsYear,
    all: topArtistsAll
  };

  // console.log(userData);

  // top albums api calls
  let [
    topAlbumsSevenDays,
    topAlbumsMonth,
    topAlbumsYear,
    topAlbumsAll
  ] = await Promise.all([
    lfmGetTop(username, '7day', 'albums'),
    lfmGetTop(username, '1month', 'albums'),
    lfmGetTop(username, '12month', 'albums'),
    lfmGetTop(username, 'all', 'albums')
  ]);

  userData.topAlbums = {
    sevenDays: topAlbumsSevenDays,
    month: topAlbumsMonth,
    year: topAlbumsYear,
    all: topAlbumsAll
  };

  // console.log(userData);

  // user friends api calls
  let userFriends = await lfmGetFriends(username);

  // userData.friends = {}
  userData.friends = userFriends;

  res.status(200).json(userData);
}
