import React from 'react';

export default function FriendActivity({ userData }) {
  return (
    <div className="container" style={{ fontFamily: "Poppins" }}>
      <div className="box has-background-dark">
        <p className="has-text-white is-size-4">Friend Activity</p>
        {/* <p> {JSON.stringify(userData.friends)} </p> */}
        {userData.friends ? (
          userData.friends.map((friend, index) => (
            <div className="column mr-0 pt-3 hover" key={index}>
              <div className="box is-flex is-justify-content-flex-start">
                <article>
                  <figure className="media-left image">
                    <img src={friend.image} alt="Friend Profile Picture" />
                  </figure>
                </article>
                <div className="container">
                  <p className="has-text-primary ml-6 mt-5 is-size-4">
                    <a href={friend.url} target="_blank"><strong>{friend.name}</strong></a> <br />
                  </p>
                  <p className="has-text-primary ml-6 mt-5 is-size-5">
                    {friend.npTrack}
                  </p>
                  <p className="has-text-primary ml-6 mt-5 is-size-6">
                    {friend.npArtist}
                  </p>
                  {friend.nowplaying ? (
                    <progress className="progress is-link mt-3 ml-4" max="100">45%</progress>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No friend data available!</p>
        )}
      </div>
    </div>
  );
}
