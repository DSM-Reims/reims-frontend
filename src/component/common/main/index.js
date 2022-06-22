import React, { useState } from "react";
import styled from "styled-components";
import ThumbnailExplanation from "./ThumbnailExplanation";
import { ReactComponent as LeftArrow } from "../../../assets/chevron-left-solid.svg";
import { ReactComponent as RightArrow } from "../../../assets/chevron-right-solid.svg";

import MainHeader from "../Header";
import { useCode } from "../../../hooks";
import { getResult, postVotes } from "./apis";
import { useQuery, useMutation } from "react-query";
import { queryClient } from "../../../index";
import { useUser } from "../../../contexts/user";

const Body = () => {
  const [position, setPosition] = useState(0);
  const code = useCode();
  const { userData } = useUser();
  const { data } = useQuery("getResult", () => getResult(code));
  const { mutate: votesMutation } = useMutation(
    () => postVotes(code, data[position].clubId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["getVotes", data[position].clubId]);
        queryClient.invalidateQueries("getResult");
      },
    }
  );
  const handlePrevBtn = () => {
    if (position < 1) {
      alert("더 이상 왼쪽으로 넘길 수 없습니다.");
    } else {
      setPosition(position - 1);
    }
  };

  const handleNextBtn = () => {
    if (position > data.length - 2) {
      alert("더 이상 오른쪽으로 넘길 수 없습니다.");
    } else {
      setPosition(position + 1);
    }
  };

  return (
    <>
      <MainHeader
        buttons={
          userData === "CLUB"
            ? [
                {
                  color: "black",
                  text: "Vote",
                  onClick: () => {
                    // eslint-disable-next-line no-restricted-globals
                    const result = confirm(`에 투표하시겠습니까?`);
                    if (result) {
                      votesMutation();
                    }
                  },
                },
              ]
            : undefined
        }
      />
      <Wrapper>
        <RelativeContainer>
          <ArrowContainer>
            <LeftArrow
              onClick={handlePrevBtn}
              id="left-arrow"
              width="50px"
              height="50px"
              style={{
                opacity: position === 0 ? "0.2" : "1",
                transition: "0.5s",
              }}
            />
            <RightArrow
              onClick={handleNextBtn}
              id="right-arrow"
              width="50px"
              height="50px"
              style={{
                opacity: position === data?.length || 0 - 1 ? "0.2" : "1",
                transition: "0.5s",
              }}
            />
          </ArrowContainer>
          <ThumbnailExplanation position={position} data={data} />
        </RelativeContainer>
      </Wrapper>
    </>
  );
};

export default Body;

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 80px;
  overflow-x: hidden;
`;

const RelativeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  gap: 200px;
`;

const ArrowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 2;
  #left-arrow {
    :hover {
      cursor: pointer;
    }
  }
  #right-arrow {
    :hover {
      cursor: pointer;
    }
  }
`;
