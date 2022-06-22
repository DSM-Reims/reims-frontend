import React, { useState } from "react";
import styled from "styled-components";
import MainHeader from "./common/Header";
import Body from "./common/main";

const Main = () => {
  return (
    <MainPage>
      <MainHeader
        buttons={[
          {
            color: "black",
            text: "Vote",
            onClick: () => alert(`에 투표하시겠습니까?`)
          },
        ]}
      />
      <Body />
    </MainPage>
  );
};

export default Main;

const MainPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
