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
            color: "red",
            text: "Delete",
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
