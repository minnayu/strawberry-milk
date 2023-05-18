import React from "react";
// add functionality for buttons
export default function Tracks({ userData }) {
    return (
        <div class="container">
          <div class="buttons is-centered">
            <button class="button is-link">Week</button>
            <button class="button is-link">1 Month</button>
            <button class="button is-link">1 Year</button>
          </div>
            <div class="columns is-multiline">
            {userData.userData.topTracks.sevenDays.map((track, index) => (
              <div className="column mr-0 pt-3" key={index}>
                <div className="box">
                  <article className="media">
                    {/* <figure className="media-left">
                      <p className="image is-16x16">
                        <img src={track.image[2]["#text"]} alt="Placeholder image" />
                      </p>
                    </figure> */}
                    <div className="media-content">
                      <div className="content">
                        <p class="has-text-link">
                          <a href={track.url} target="_blank"><strong>{track.name}</strong></a> <br />
                          {track.artist}
                        </p>
                        <p> <i>{track.playcount} scrobbles </i></p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
            </div>
        </div>
        );      
}
