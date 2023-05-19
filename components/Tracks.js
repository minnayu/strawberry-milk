import React from "react";
import { useState } from "react";
export default function Tracks({ userData }) {
  const [selectedPeriod, setSelectedPeriod] = useState("sevenDays");

    return (
        <div class="container">
          <div class="buttons is-centered">
            <button style={{fontSize:"1.5em"}}
              className={`button is-link ${selectedPeriod === "sevenDays" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("sevenDays")}>
              Week
            </button>
            <button style={{fontSize:"1.5em"}}
              className={`button is-link ${selectedPeriod === "month" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("month")}>
              1 Month
            </button>
            <button style={{fontSize:"1.5em"}}
              className={`button is-link ${selectedPeriod === "year" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("year")}>
              1 Year
            </button>
            <button style={{fontSize:"1.5em"}}
              className={`button is-link ${selectedPeriod === "all" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("all")}>
              All Time
            </button>
          </div>
          <div class="box has-background-primary">
            {userData.userData.topTracks[selectedPeriod]?.map((track, index) => (
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