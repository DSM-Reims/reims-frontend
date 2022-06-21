import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tempArr } from './tempArr';

const ThumbnailExplanation = ({ position }) => {
    return (
        <Wrapper num={position}>
            {
                tempArr.map((club_result, index) => <ThumbnailItem {...club_result} key={index} />)
            }
        </Wrapper>
    );
};

const ThumbnailItem = ({ thumbnail, name, simple }) => {
    return (
        <ThumbItem>
            <ThumbImage src={thumbnail}></ThumbImage>
            <div>
                <div>{name}</div>
                <div className='description'>
                    {simple}
                </div>
            </div>
        </ThumbItem>
    );
};

const imgWidth = 400    // 슬라이드 할 이미지의 가로 길이
const slideGap = 30     // 각 슬라이드 사이의 간격
const slideMovingUnit = imgWidth + slideGap     // 슬라이드 버튼 클릭 시 한 번에 넘어가는 길이


export default ThumbnailExplanation;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    transform:${(props) => (`translateX(-${props.num*slideMovingUnit}px)`)};
    transition: 0.3s;
`

const ThumbImage = styled.img`
    border: none;
    width: 400px;
    height: 400px;
`

const ThumbItem = styled.div`
    flex-direction: column;
    justify-content: center;
    & > div{
        display: block;
        width: 400px;
        & .description {
            color: #aaaaaa;
        }
        justify-content: center;
    }
`