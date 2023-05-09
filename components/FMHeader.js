import React from "react";
import styled from "styled-components";

export default function FMHeader ( { data } ) {
    const allData = JSON.stringify(data)
    const userData = JSON.parse(JSON.stringify(data))
    
    return (
        <Wrapper>
            {/* <h1>{allData}</h1> */}
            <div class="hero-body">
                <StyledImage src={userData.image[2]["#text"]}/>
            </div>
            <div class="hero-body">
                <div>
                    <p class="heading">Scrobbles</p>
                    <p class="title">{Number(userData.playcount).toLocaleString()}</p>
                </div>
            </div>
            <div class="hero-body">
                <div>
                    <p class="heading">Artists</p>
                    <p class="title">{Number(userData.artist_count).toLocaleString()}</p>
                </div>
            </div>
            <div class="hero-body">
                <div>
                    <p class="heading">Tracks</p>
                    <p class="title">{Number(userData.track_count).toLocaleString()}</p>
                </div>
            </div>
            <div class="hero-body">
                <div>
                    <p class="heading">Albums</p>
                    <p class="title">{Number(userData.album_count).toLocaleString()}</p>
                </div>
            </div>
        </Wrapper>
        
    );
}

const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px max(10px, 10%);
`

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;