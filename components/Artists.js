import React from "react";
import { useState } from "react";
import styled from "styled-components";


export default function Artists({ userData }) {
  const [selectedPeriod, setSelectedPeriod] = useState("sevenDays");

    return (
        <div class="container">
          <div class="buttons is-centered">
            <Button
              className={`button is-link ${selectedPeriod === "sevenDays" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("sevenDays")}>
              Week
            </Button>
            <Button
              className={`button is-link ${selectedPeriod === "month" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("month")}>
              1 Month
            </Button>
            <Button
              className={`button is-link ${selectedPeriod === "year" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("year")}>
              1 Year
            </Button>
            <Button
              className={`button is-link ${selectedPeriod === "all" ? "is-active" : ""}`}
              onClick={() => setSelectedPeriod("all")}>
              All Time
            </Button>
          </div>
          <div class="box has-background-primary">
            {userData.userData.topArtists[selectedPeriod]?.map((artist, index) => (
              <div className="column mr-0 pt-3 hover" key={index}>
                <div className="box is-flex is-justify-content-flex-start">
                  <SquareImage src={artist.image} alt="Artist image" />
                  <ArtistWrapper>
                    <ArtistName class="has-text-primary">
                      <a href={artist.url} target="_blank"><strong>{artist.name}</strong></a> <br />
                    </ArtistName>
                    <ArtistScrobbles class="has-text-primary">
                      <i>{artist.playcount} scrobbles </i>
                    </ArtistScrobbles>                   
                  </ArtistWrapper>
                </div>
              </div>
            ))}
          </div>
        </div>
    );      
}

const Button = styled.button`
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ArtistWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-wrap: break-word;
`;

const ArtistName = styled.span`
  font-size: 2rem;
  color: #8A4D76;
  margin-left: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1.50rem;
  }
`;

const ArtistScrobbles = styled.span`
  font-size: 1.25rem;
  color: #8A4D76;
  margin-left: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SquareImage = styled.img`
  width: auto;
  height: auto;
  aspect-ratio: 1/1;
`;