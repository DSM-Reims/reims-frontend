import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getVotes } from "./apis";
import { useCode } from "../../../hooks";
import { useUser } from "../../../contexts/user";

const ThumbnailExplanation = ({ position, data }) => {
  return (
    <Wrapper num={position}>
      {data?.map((item, index) => (
        <ThumbnailItem
          {...item}
          key={index}
          index={index}
          position={position}
        />
      ))}
    </Wrapper>
  );
};

const ThumbnailItem = ({
  clubId,
  thumbnail,
  name,
  description,
  index,
  position,
}) => {
  const code = useCode();
  const { data } = useQuery(["getVotes", clubId], () => getVotes(code, clubId));
  const { userData } = useUser();

  return (
    <ThumbItem style={position === index ? null : { opacity: 0.7 }}>
      <ThumbImage
        src={thumbnail}
        style={position === index ? { width: "500px", height: "500px" } : {}}
      />
      <div>
        <div>
          {name} {userData === "TEACHER" && `| 투표수 ${data}`}
        </div>
        <div className="description">{description}</div>
      </div>
    </ThumbItem>
  );
};

const imgWidth = 400; // 슬라이드 할 이미지의 가로 길이
const slideGap = 30; // 각 슬라이드 사이의 간격
const slideMovingUnit = imgWidth + slideGap; // 슬라이드 버튼 클릭 시 한 번에 넘어가는 길이

export default ThumbnailExplanation;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  transform: ${(props) =>
    `translateX(-${(props.num - 1) * slideMovingUnit}px)`};
  transition: 0.3s;
  padding-left: 200px;
`;

const ThumbImage = styled.img`
  border: none;
  width: 400px;
  height: 400px;
  transition: 0.3s;
`;

const ThumbItem = styled.div`
  flex-direction: column;
  justify-content: center;
  transition: 0.3s;
  & > div {
    display: block;
    width: 400px;
    & .description {
      color: #aaaaaa;
    }
    justify-content: center;
  }
`;
