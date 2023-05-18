import React from "react";

export default function Artists({ userData }) {
    return (
        <div class="container">
            <div class="columns is-multiline">
            {userData.userData.topArtists.sevenDays.map((artist, index) => (
              <div className="column mr-0 pt-3" key={index}>
                <div className="box">
                  <article className="media">
                    {/* <figure className="media-left">
                      <p className="image is-16x16">
                        <img src={artist.image} alt="Artist image" />
                      </p>
                    </figure> */}
                    <div className="media-content">
                      <div className="content">
                        <p class="has-text-link">
                          <a href={artist.url}><strong>{artist.name}</strong></a> <br />
                        </p>
                        <p> <i>{artist.playcount} scrobbles </i></p>
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
