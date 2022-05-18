import React from 'react';
import styled from 'styled-components';

const ButtonContainer = ({type}) => {
    return (
        <Wrapper>
            <button>Vote</button>
        </Wrapper>
    );
};

export default ButtonContainer;

const Wrapper = styled.div`
    button{
        width: 120px;
        height: 50px;
        border: 0;
        border-radius: 8px;
        background-color: #000000;
        color: #ffffff;
        font-size: 16px;
        &:hover{
            cursor: pointer;
        }
    }
`