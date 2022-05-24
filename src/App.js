import React from 'react';
import { BrowserRouter, Link, Route, Switch, Routes } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import styled from 'styled-components';
import Body from './component/common/Body';
import MainHeader from './component/common/Header/';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};

const  ObjectList = () => {
    
}

const Main = () => {
    return (
        <MainPage>    
            <MainHeader />
            <Body/>
        </MainPage>
    )
}

export default App;

const MainPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

