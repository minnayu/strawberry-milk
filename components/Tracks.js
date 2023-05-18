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
            <div class="box has-background-primary">
            {userData.userData.topTracks.sevenDays.map((track, index) => (
              <div className="column mr-0 pt-3 hover" key={index}>
                <div className="box is-flex is-justify-content-flex-start">
                  <article className="media">
                    <figure className="media-left">
                        <img src={track.image} alt="Placeholder image" />
                    </figure>
                  </article>
                  <div className="container">
                      <div className="content">
                        <p class="has-text-primary ml-6 mt-5 is-size-3">
                          <a href={track.url} target="_blank"><strong>{track.name}</strong></a> <br />
                        </p>
                        <p className="has-text-primary ml-6 mt-1 is-size-4">
                          {track.artist}
                        </p>
                        <p class="has-text-primary ml-6 pt-5 is-size-5"> 
                          <i>{track.playcount} scrobbles </i>
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            ))}
            </div>
        </div>
        );      
}