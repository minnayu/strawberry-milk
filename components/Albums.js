import React from "react";
import { useState } from "react";

export default function Albums({ userData }) {
  const [selectedPeriod, setSelectedPeriod] = useState("sevenDays");

    return (
        <div class="container">
          <div class="buttons is-centered">
            <button style={{"font-size":"1.5em"}}
              className={`button is-link ${selectedPeriod === "sevenDays" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("sevenDays")}>
                Week
            </button>
            <button style={{"font-size":"1.5em"}}
              className={`button is-link ${selectedPeriod === "month" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("month")}>
                1 Month
            </button>
            <button style={{"font-size":"1.5em"}}
              className={`button is-link ${selectedPeriod === "year" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("year")}>
                1 Year
            </button>
            <button style={{"font-size":"1.5em"}}
              className={`button is-link ${selectedPeriod === "all" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("all")}>
                All Time
            </button>
          </div>
          <div class="box has-background-primary">
            {userData.userData.topAlbums[selectedPeriod]?.map((artist, index) => (
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
