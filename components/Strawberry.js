import React, { useState } from "react";
import styled from "styled-components";
import FMHeader from './FMHeader';
import Tabs from './Tabs';
import { useEffect } from "react";
const { lfmGetRecent } = require('../functions.js')

export default function Strawberry ( { data } ) {
    const userData = JSON.parse(JSON.stringify(data))
    // change to fetch user data using API?

    return (
        <div>
            <FMHeader userData={userData}/>
            {/* <Tabs/> */}
        </div>
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
