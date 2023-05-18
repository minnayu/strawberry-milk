import React from "react";

export default function Recent({ userData }) {
    return (
        <div class="container">
            <div class="box has-background-primary">
            {userData.userData.recentTracks.map((track, index) => (
                <div className="column mr-0 pt-3 hover" key={index}>
                <div className="box is-flex is-justify-content-flex-start">
                    <article className="media">
                    <figure className="media-left image">
                        <img src={track.image} alt="Track image" />
                    </figure>
                    </article>
                        <div className="container">
                            <div className="content">
                                <p className="has-text-primary ml-6 mt-5 is-size-3">
                                    <a href={track.url} target="_blank"><strong>{track.name}</strong></a> <br />
                                </p>
                                <p className="has-text-primary ml-6 mt-5 is-size-4">
                                    {track.artist}
                                </p>
                                {track.nowplaying ? (
                                    <progress class="progress is-link mt-3 ml-4" max="100">45%</progress>
                                ) : (
                                    <p></p>
                                )}
                        </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    );      
}
