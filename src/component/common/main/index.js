import React, { useState } from "react";
import styled from "styled-components";
import ThumbnailExplanation from "./ThumbnailExplanation";
import { ReactComponent as LeftArrow } from "../../../assets/chevron-left-solid.svg";
import { ReactComponent as RightArrow } from "../../../assets/chevron-right-solid.svg";
import { tempArr } from "./tempArr";
import { useEffect } from "react";

const Body = () => {
  const [position, setPosition] = useState(0);

  const handlePrevBtn = () => {
    if (position < 1) {
      alert("더 이상 왼쪽으로 넘길 수 없습니다.");
    } else {
      setPosition(position - 1);
    }
  };

  const handleNextBtn = () => {
    if (position > tempArr.length - 2) {
      alert("더 이상 오른쪽으로 넘길 수 없습니다.");
    } else {
      setPosition(position + 1);
    }
  };

  return (
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
              opacity: position === tempArr.length -1 ? "0.2" : "1",
              transition: "0.5s",
            }}
          />
        </ArrowContainer>
        <ThumbnailExplanation position={position} />
      </RelativeContainer>
    </Wrapper>
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
