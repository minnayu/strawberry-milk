import React from "react";
import styled from "styled-components";

export default function Strawberry ( { data } ) {
    const userData = JSON.stringify(data)
    const userScrobbles = JSON.stringify(data.playcount)
    const userArtists = JSON.stringify(data.artist_count)
    return (
        <Wrapper>
            <h1>{userData}</h1>
            <div class="hero-body">
                <p class="title">
                Hero title
                </p>
            </div>
            <div class="hero-body">
                <div>
                    <p class="heading">Scrobbles</p>
                    <p class="title">{userScrobbles}</p>
                </div>
            </div>
            <div class="hero-body">
                    <div>
                    <p class="heading">Artists</p>
                    <p class="title">{userArtists}</p>
                    </div>
            </div>
            <div class="hero-body">
                    <div>
                    <p class="heading">Tweets</p>
                    <p class="title">3,456</p>
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

// const DataWrapper = styled.section`
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction:row;
// `
