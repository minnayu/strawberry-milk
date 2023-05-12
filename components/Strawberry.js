import React, { useState } from "react";
import styled from "styled-components";
import FMHeader from './FMHeader';
import Tabs from './Tabs';
import FriendActivity from './FriendActivity';

export default function Strawberry ( { data } ) {
    return (
        <div>
            <FMHeader userData={data}/>
            <Wrapper>
                <Tabs userData={data}/>
                {/* <FriendActivity user={data.name}/> */}
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px max(10px, 10%);
`
