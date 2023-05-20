import React from "react";
import styled from 'styled-components';

export default function Recent({ userData }) {
    return (
        <div class="container">
            <div class="box has-background-primary">
            {userData.userData.recentTracks.map((track, index) => (
                <div className="column mr-0 pt-3 hover" key={index}>
                    <div className="box is-flex is-justify-content-flex-start">
                    <SquareImage src={track.image} alt="Track image" />
                        <TrackWrapper>
                            <TrackTitle class="has-text-primary">
                                <a href={track.url} target="_blank"><strong>{track.name}</strong></a> <br />
                            </TrackTitle>
                            <TrackArtist class="has-text-primary ">
                                {track.artist}
                            </TrackArtist>
                            {track.nowplaying ? (
                                <progress class="progress is-link mt-3 m-3" max="100">45%</progress>
                            ) : (
                                <p></p>
                            )}
                        </TrackWrapper>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );      
}

const TrackWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-wrap: break-word;
`;

const TrackTitle = styled.span`
  font-size: 2rem;
  color: #8A4D76;
  margin-left: 3rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TrackArtist = styled.span`
  font-size: 1.5rem;
  color: #8A4D76;
  margin-left: 3rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SquareImage = styled.img`
  width: auto;
  height: auto;
  aspect-ratio: 1/1;
`;