import React, { useState } from "react";
import styled from "styled-components";
import FMHeader from './FMHeader';
import Tabs from './Tabs';
import FriendActivity from './FriendActivity';

export default function Strawberry ( { userData } ) {
    return (
        <div>
            <FMHeader userData={userData}/>
            <Wrapper>
              <TabWrapper>
                <Tabs userData={userData}/>
              </TabWrapper>    
                <FriendWrapper>
                    <FriendActivity userData={userData}/>
                </FriendWrapper>
            </Wrapper>
        </div>
    );
}

const Wrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const TabWrapper = styled.div`
  flex: 0 0 70%;
`;

const FriendWrapper = styled.div`
  flex: 1 0 30%;
  padding: 0 2vw 2vw 2vw;
  @media (max-width: 768px) {
    flex: 0 0 70%; /* Adjust the flex value for smaller screens */
  }
`;


  