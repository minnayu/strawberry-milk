import React from "react";
import styled from "styled-components";

export default function FMHeader ( { userData } ) {
    // add nowplaying
    return (
       
        <div>
            <Wrapper>
                <div class="hero-body">
                    <ImageWrapper>
                        <StyledImage src={userData.image[2]["#text"]} style={{height: "70%", width: "70%"}}/>
                        <h1 class="subtitle" style={{color:"black"}}>{userData.name}</h1>
                    </ImageWrapper>
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
        </div>
    );
}


const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;