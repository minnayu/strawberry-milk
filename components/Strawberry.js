import React from "react";
import styled from "styled-components";
import FMHeader from './FMHeader';

export default function Strawberry ( { data } ) {
    return (
        <div>
            <FMHeader data={data}/>
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
