import React from 'react';
import styled from 'styled-components';

const ButtonContainer = ({type}) => {
    return (
        <Wrapper>
            <button type='black'>Vote</button>
        </Wrapper>
    );
};

export default ButtonContainer;

const Wrapper = styled.div`
    button{
        width: 120px;
        height: 50px;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        background-color: #000000;
        color: #ffffff;
        &:hover{
            cursor: pointer;
        }
    }
`