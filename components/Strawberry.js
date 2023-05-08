import React from "react";

export default function Strawberry ({ data, error }) {
    console.log(data);
    return (<h1> {data} </h1>);
}