import React from 'react';
import styled from 'styled-components';
import ButtonContainer from './ButtonContainer';

const MainHeader = ({btn, color, contents}) => {  
    return (
        <Wrapper>
            <HeaderLeft>
                <div>Home</div>
                <div>Upload</div>
                <div>Requirements</div>
            </HeaderLeft>
            <Title>Reims</Title>
            <ButtonContainer btn={btn} color={color} contents={contents}/>
        </Wrapper>

    );

};

export default MainHeader;

const Wrapper = styled.header`
    display: flex;
    align-items: flex-end;
    width: 100%;
    min-height: 170px;
    padding: 0px 100px;
    padding-bottom: 10px;
    justify-content: space-between;
    /* position: relative; */
`;

const HeaderLeft = styled.div`
    display: flex;
    div{
        &:hover{
        cursor: pointer;
        }
        :nth-child(1) {margin-right: 40px;}
        :nth-child(2) {margin-right: 40px;}
    }
`;

const Title = styled.div`
    &:hover{
        cursor: pointer;
    }
    /* position: absolute; */
    font-size: 48px; 
    font-weight: bolder;
    transform: translateX(-50%);
`;
