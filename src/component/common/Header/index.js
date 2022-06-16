import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FlexRow } from "../Flex";
import ButtonContainer from "./ButtonContainer";

const MainHeader = ({ buttons = [] }) => {
  return (
    <Wrapper>
      <HeaderLeft>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>Upload</div>
        <div>
          <Link to="/requirement">Requirements</Link>
        </div>
      </HeaderLeft>
      <Title>Reims</Title>
      <FlexRow gap={10}>
        {buttons && (
          <>
            {buttons.map((item) => (
              <ButtonContainer
                onClick={item.onClick}
                btn={true}
                color={item.color}
                contents={item.text}
              />
            ))}
          </>
        )}
      </FlexRow>
    </Wrapper>
  );
};

export default MainHeader;

const Wrapper = styled.header`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 170px;
  min-height: 170px;
  padding: 0px 100px;
  padding-bottom: 10px;
  justify-content: space-between;
  /* position: relative; */
`;

const HeaderLeft = styled.div`
  display: flex;
  & a {
    border-bottom: 1px solid white;
    color: black;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      border-bottom: 1px solid black;
    }
  }
  div {
    &:hover {
      cursor: pointer;
    }
    :nth-child(1) {
      margin-right: 40px;
    }
    :nth-child(2) {
      margin-right: 40px;
    }
  }
`;

const Title = styled.div`
  &:hover {
    cursor: pointer;
  }
  left: 50%;
  position: absolute;
  font-size: 48px;
  font-weight: bolder;
  transform: translateX(-50%);
`;
