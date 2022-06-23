import React, { useState } from "react";
import { useMutation } from "react-query";
import styled from "styled-components";
import { FlexCol, FlexRow } from "../Flex";
import MainHeader from "../Header";
import ButtonContainer from "../Header/ButtonContainer";
import { postResult, postPicture, postVideo } from "./apis";
import { useCode } from "../../../hooks";
import { Navigate, useNavigate } from "react-router-dom";

const ResultUpload = ({ buttons = [] }) => {
  const [result, setResult] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const [picture, setPicture] = useState();
  const [video, setVideo] = useState();

  const code = useCode();
  const onChangeHandler = (e) => {
    setResult({ ...result, [e.target.name]: e.target.value });
  };

  const { mutateAsync: postResultMutate } = useMutation(() =>
    postResult(code, result)
  );
  const { mutateAsync: postVideoMutate } = useMutation(() =>
    postVideo(code, video)
  );
  const { mutateAsync: postPictureMutate } = useMutation(() =>
    postPicture(code, picture)
  );

  return (
    <Wrapper>
      <MainHeader
        buttons={[
          {
            color: "black",
            text: "Upload",
            onClick: async () => {
              await postResultMutate();
              await Promise.all([
                await postVideoMutate(),
                await postPictureMutate(),
              ]);
              alert("업로드가 완료 되었습니다.");
              navigate(`/${code}/home`);
            },
          },
        ]}
      />

      <FlexCol
        style={{
          marginTop: "30px",
        }}
        gap={30}
        fullWidth
      >
        <ItemContainer gap={10} fullWidth>
          <div>Title</div>
          <ResultInformationInput
            name="title"
            placeholder="제목을 입력해주세요"
            onChange={onChangeHandler}
            value={result.title}
          />
        </ItemContainer>
        <ItemContainer gap={10} fullWidth>
          <div>Content</div>
          <ResultInformationInput
            name="content"
            placeholder="설명을 입력해주세요"
            onChange={onChangeHandler}
            value={result.content}
          />
        </ItemContainer>
        <ItemContainer gap={10}>
          <div>Thumnail</div>
          <input
            onChange={(e) => setPicture(e.target.files[0])}
            type="file"
            id="ThumnailUpload"
          ></input>
        </ItemContainer>
        <ItemContainer gap={10}>
          <div>Video</div>
          <input
            onChange={(e) => setVideo(e.target.files[0])}
            type="file"
          ></input>
        </ItemContainer>
      </FlexCol>
    </Wrapper>
  );
};

export default ResultUpload;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemContainer = styled(FlexCol)`
  box-sizing: border-box;
  padding: 0 40px;
`;

const UploadContainer = styled.div`
  width: 1720px;
  height: 700px;
  display: flex;
  background-color: #fafafa;
  border: none;
  border-radius: 5px;
`;

const ResultInformationInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: #ebebeb;
  padding: 0 20px;
  outline: none;
  box-sizing: border-box;
`;
