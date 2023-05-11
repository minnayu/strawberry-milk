import React, { useState } from "react";
import styled from "styled-components";
import FMHeader from './FMHeader';
import Tabs from './Tabs';
import FriendActivity from './FriendActivity';

export default function Strawberry ( { data } ) {
    const userData = JSON.parse(JSON.stringify(data))
    // change to fetch user data using API?

    return (
        <div>
            <FMHeader userData={userData}/>
            <Wrapper>
                <Tabs/>
                
                <FriendActivity/>
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
    padding: 30px max(10px, 10%);
`
