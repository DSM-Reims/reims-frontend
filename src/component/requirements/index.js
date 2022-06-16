import MainHeader from "../common/Header";
import { FlexRow, FlexCol } from "../common/Flex";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import ButtonContainer from "../common/Header/ButtonContainer";
import { useMutation } from "react-query";
import { useCode } from "../../hooks";
import { postObjectApply } from "./apis";

const RequirementItem = ({ edit }) => {
  return (
    <tr>
      <td>테스트</td>
      <td>테스트</td>
      <td>테스트</td>
      <td>테스트</td>
      <td>테스트</td>
      <td>테스트</td>
      <td>테스트</td>
      <td>{edit && <input type="checkbox" />}</td>
    </tr>
  );
};

const Modal = ({ modalClose }) => {
  const code = useCode();
  const [object, setObject] = useState({
    goodsName: "",
    url: "",
    clubName: undefined,
  });

  const onChangeHandler = (e) => {
    setObject({ ...object, [e.target.name]: e.target.value });
  };
  const { mutate } = useMutation(() => postObjectApply(code, object));
  return (
    <ModalContainer>
      <FlexCol align="center" className="modal-contents" gap={20}>
        <h3>물품 신청</h3>
        <Input onChange={onChangeHandler} name="goodsName" placeholder="물품" />
        <Input onChange={onChangeHandler} name="url" placeholder="URL" />
        <ButtonContainer contents={"Apply"} btn />
      </FlexCol>
      <div
        className="overlay"
        onClick={() => {
          mutate();
          modalClose();
        }}
      />
    </ModalContainer>
  );
};

const disolveAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;

  .modal-contents {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    background-color: white;
    width: 640px;
    padding: 30px;
    border-radius: 8px;

    animation: 0.5s ${disolveAnimation} ease-out;
  }
  .overlay {
    background-color: black;
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  background-color: rgb(235, 235, 235);
  outline: none;
  border: none;
  border-radius: 8px;
  padding: 15px 10px;
`;

const Requirements = () => {
  const code = useCode();
  const [isOpen, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const modalClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isOpen && <Modal modalClose={modalClose} />}
      <RequirementsWrapper>
        <MainHeader
          buttons={[
            {
              color: "black",
              text: "Filter",
              onClick: () => setEdit(!edit),
            },
            {
              color: "rgb(240, 113, 101)",
              text: "Delete",
              onClick: () => setEdit(!edit),
            },
          ]}
        />
        <table>
          <thead>
            <tr>
              <th>동아리명</th>
              <th>신청자</th>
              <th>물품</th>
              <th>URL</th>
              <th>신청날짜</th>
              <th>반납날짜</th>
              <th>반납여부</th>
              <th></th>
            </tr>
          </thead>
          <thead>
            {Array(12)
              .fill(-1)
              .map((_, idx) => (
                <RequirementItem edit={edit} />
              ))}
          </thead>
        </table>

        <AdditionalRequirementItemWrapper onClick={() => setOpen(true)}>
          +
        </AdditionalRequirementItemWrapper>
      </RequirementsWrapper>
    </>
  );
};

export default Requirements;

const AdditionalRequirementItemWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  transition: 0.3s;
  border-bottom: 1px solid #b5b5b5;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
`;

const RequirementsWrapper = styled(FlexCol)`
  & table {
    width: 90%;
    margin: 0 auto;
    border-collapse: collapse;

    th {
      font-weight: 400;

      &:nth-child(1),
      &:nth-last-child(2) {
        font-weight: bold;
      }
    }
    tr {
      border-bottom: 1px solid #b5b5b5;
      height: 70px;
      margin: 0 40px;
      text-align: center;

      &:nth-child(2n) {
        background-color: #fafafa;
      }

      & td:nth-child(1),
      & td:nth-last-child(1) {
        font-weight: bold;
      }
    }
  }
`;
