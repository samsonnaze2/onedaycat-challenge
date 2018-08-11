import React from 'react';
import styled from "styled-components";

export default () => {
    const Spinner = styled.div`
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
`;

    const SpinnerSun = styled.div`
    width: 18px;
    height: 18px;
    background-color: #E47825;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
`;

    const SpinBounce1 = SpinnerSun.extend`
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
`;

    const SpinBounce2 = SpinnerSun.extend`
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
`;
    return (
        <Spinner>
            <SpinBounce1></SpinBounce1>
            <SpinBounce2></SpinBounce2>
            <SpinnerSun></SpinnerSun>
        </Spinner>
    )
}