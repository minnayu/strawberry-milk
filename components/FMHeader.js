import React from "react";
import styled from "styled-components";

export default function FMHeader ( { userData } ) {
    // add nowplaying
    return (
        <div>
            <Wrapper>
                <div class="hero-body">
                    <StyledImage src={userData.image[2]["#text"]} style={{height: "70%", width: "70%"}}/>
                    {/* <Wrapper>    */}
                        <h1 class="subtitle" style={{color:"black"}}>{userData.name}</h1>
                    {/* </Wrapper> */}
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
    justify-content: space-evenly;
    align-items: center;
    // padding: 30px max(10px, 10%);
`

const StyledImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;