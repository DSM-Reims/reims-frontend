import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer';

const MainHeader = () => {
    return (
        <Wrapper>
            <HeaderLeft>
                <div>Home</div>
                <div>Upload</div>
                <div>Requirements</div>
            </HeaderLeft>
            <Title>Reims</Title>
            <div>
                <ButtonContainer type=""/>
            </div>
        </Wrapper>
    );
};

export default MainHeader;

const Wrapper = styled.header`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 170px;
    padding: 0px 100px;
    padding-bottom: 10px;
    justify-content: space-between;
    position: relative;
`

const HeaderLeft = styled.div`
    display: flex;
    div{
        &:hover{
        cursor: pointer;
        }
        :nth-child(1) {margin-right: 40px;}
        :nth-child(2) {margin-right: 40px;}
    }
`

const Title = styled.div`
    &:hover{
        cursor: pointer;
    }
    position: absolute;
    font-size: 48px; 
    font-weight: bolder;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
`