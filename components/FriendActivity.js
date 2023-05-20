import React from 'react';
import styled from 'styled-components'

export default function FriendActivity({ userData }) {
  return (
    <div className="container" style={{ fontFamily: "Poppins" }}>
      <p className="has-text-primary is-size-4 mt-5">Friend Activity</p>
      <div className="box has-background-dark">
        {userData.friends ? (
          userData.friends.map((friend, index) => (
            <div className="column mr-0 pt-3 hover" key={index}>
              <div className="box is-flex is-justify-content-flex-start">
                <SquareImage src={friend.image} alt="Friend Profile Picture"/>
                <FriendWrapper>
                    <FriendName class="has-text-primary">
                      <a href={friend.url} target="_blank"><strong>{friend.name}</strong></a> <br />
                    </FriendName>
                    <TrackTitle class="has-text-primary">
                      <a href={friend.npURL} target="_blank"><p><strong>{friend.npTrack}</strong></p> <br /></a>
                    </TrackTitle>
                    <TrackArtist class="has-text-primary">
                      {friend.npArtist}
                    </TrackArtist>
                  </FriendWrapper>
                  {friend.nowplaying ? (
                    <progress className="progress is-link mt-3 ml-4" max="100">45%</progress>
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
          ))
        ) : (
          <p>No friend data available!</p>
        )}
      </div>
    </div>
  );
}

const FriendWrapper = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-wrap: break-word;
`;

const FriendName = styled.span`
  font-size: 1rem;
  color: #8A4D76;
  margin-left: 1.25rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const TrackTitle = styled.span`
  font-size: 0.75rem;
  color: #8A4D76;
  margin-left: 1.25rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const TrackArtist = styled.span`
  font-size: 0.75rem;
  color: #8A4D76;
  margin-left: 1.25rem;
  margin-top: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SquareImage = styled.img`
  width: 50%;
  height: 50%;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

