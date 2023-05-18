import React from "react";

export default function Artists({ userData }) {
    return (
        <div class="container">
          <div class="buttons is-centered">
            <button class="button is-link">Week</button>
            <button class="button is-link">1 Month</button>
            <button class="button is-link">1 Year</button>
          </div>
          <div class="box has-background-primary">
            {userData.userData.topArtists.sevenDays.map((artist, index) => (
              <div className="column mr-0 pt-3 hover" key={index}>
                <div className="box is-flex is-justify-content-flex-start">
                  <article className="media">
                    <figure className="media-left">
                      <p className="image is-1by1">
                        <img src={artist.image} alt="Artist image" style={{"height": "100%", "width":"100%"}}/>
                      </p>
                    </figure>
                  </article>
                  <div className="container">
                      <div className="content">
                        <p class="has-text-primary ml-6 my-5 is-size-3">
                          <a href={artist.url} target="_blank"><strong>{artist.name}</strong></a> <br />
                        </p>
                        <p className="has-text-primary ml-6 my-1 is-size-4"> <i>{artist.playcount} scrobbles </i></p>
                      </div>
                    </div>
                </div>
              </div>
            ))}
            </div>
        </div>
        );      
}
