import React from "react";

export default function Recent({ userData }) {
    return (
        <div class="container">
            <div class="columns is-multiline">
            {userData.userData.recentTracks.map((track, index) => (
                <div className="column mr-0 pt-3" key={index}>
                <div className="box">
                    <article className="media">
                    <figure className="media-left">
                        <p className="image is-16x16">
                        <img src={track.image} alt="Track image" />
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content">
                        <p>
                            <strong>{track.name}</strong> <br />
                            {track.artist}
                        </p>
                        {track.nowplaying ? (
                            <progress class="progress is-link" max="100">45%</progress>
                        ) : (
                            <p></p>
                        )}
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
