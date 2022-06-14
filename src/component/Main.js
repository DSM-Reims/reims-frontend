import React, { useState } from 'react';
import styled from 'styled-components';
import MainHeader from './common/Header';
import Body from './common/Body';

const Main = () => {
    const [btn, setBtn] = useState({
        btn : true,
        color : "black",
        contents : "Vote"
    });
    return (
        <MainPage>
            <MainHeader {...btn} />
            <Body/>
        </MainPage>
    );
}    

export default Main;

const MainPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
