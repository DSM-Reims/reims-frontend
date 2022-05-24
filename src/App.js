import React from 'react';
import styled from 'styled-components';
import Body from './component/common/Body';
import MainHeader from './component/common/Header/';

const App = () => {
    return (
        <Wrapper>
            <MainHeader />
            <Body/>
        </Wrapper>
    );
};

export default App;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`