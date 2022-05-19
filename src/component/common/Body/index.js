import React from 'react';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';

const Body = () => {
    return (
        <Wrapper>
            <Thumbnail />
        </Wrapper>
    );
};

export default Body;

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`