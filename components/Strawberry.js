import React, { useState } from "react";
import styled from "styled-components";
import FMHeader from './FMHeader';
import Tabs from './Tabs';
import FriendActivity from './FriendActivity';
import Tracks from './Tracks';

export default function Strawberry ( { userData } ) {
    return (
        <div>
            <FMHeader userData={userData}/>
            <Wrapper>
                <TabsWrapper>
                    <Tabs userData={userData}/>    
                </TabsWrapper>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; /* set align-items to flex-start */
    // padding: 50px max(10px, 10%);
`;

const TabsWrapper = styled.div`
    flex-grow: 1; /* set flex-grow to 1 */
    flex-basis: 1px; /* set flex-basis to a value greater than 0 */
`;
