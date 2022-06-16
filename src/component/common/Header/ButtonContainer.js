import React from "react";
import styled from "styled-components";

const ButtonContainer = ({ btn, color, contents, onClick }) => {
  return (
    <Wrapper onClick={onClick} style={{ opacity: btn ? 1 : 0 }}>
      <button style={{ backgroundColor: color }}>{contents}</button>
    </Wrapper>
  );
};

export default ButtonContainer;

const Wrapper = styled.div`
  button {
    width: 120px;
    height: 50px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    background-color: #000000;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
  }
`;
