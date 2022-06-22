import React from "react";
import styled from "styled-components";
import { FlexRow } from "../Flex";
import MainHeader from "../Header";
import ButtonContainer from "../Header/ButtonContainer";

const ResultUpload = ({ buttons = [] }) => {
  return (
    <Wrapper>
      <MainHeader
        buttons={[
          {
            color: "black",
            text: "Upload",
          },
        ]}
      />
      <UploadWrapper>
        <UploadContainer>
          <p style={{ marginLeft: "50px", marginBottom: "10px" }}>제목</p>
          <ResultInformationInput />
          <p style={{ marginLeft: "50px", marginBottom: "10px" }}>한 줄 설명</p>
          <ResultInformationInput />
          <p style={{ marginLeft: "50px", marginBottom: "10px" }}>한 줄 설명</p>
          <ResultInformationInput style={{ height: "450px" }} />
        </UploadContainer>
      </UploadWrapper>
    </Wrapper>
  );
};

export default ResultUpload;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const UploadWrapper = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UploadContainer = styled.div`
  width: 1720px;
  height: 700px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border: none;
  border-radius: 5px;
`;

const ResultInformationInput = styled.input`
  width: 1000px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: #ebebeb;
  margin-left: 40px;
  outline: none;
`;
