import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tempArr } from './tempArr';

const ThumbnailExplanation = ({ position }) => {
    return (
        <Wrapper pageNum={position}>
            {
                tempArr.map((club_result, index) => 
                    <ThumbnailItem 
                        {...club_result} 
                        key={index} 
                        index={index}
                        position={position}
                    />
                )
            }
        </Wrapper>
    );
};

const ThumbnailItem = ({ thumbnail, name, simple, index, position }) => {
    return (
        <ThumbItem 
            style={
                position === index ? {opacity:1} : 
                position-1 === index ? {opacity:1} : 
                position+1 === index ? {opacity:1} : {opacity:0}
            }
        >
            <ThumbImage src={thumbnail} style={position === index ? {width: '500px', height: '500px'} : {} } />
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

const imgQuantity = tempArr.length - 1    // 총 이미지 수
const slideWidth = imgWidth * imgQuantity + slideGap * (imgQuantity - 2)    // 슬라이드 내부 컨텐츠의 전체 길이
const hiddenSlideWidth = (slideWidth - 3 * imgWidth - 2 * slideGap)     // 화면에 들어나지 않는 슬라이드의 길이
let slideEnd;   

export default ThumbnailExplanation;


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    transform: ${(props) => (`translateX(-${(props.pageNum - 1) * slideMovingUnit}px)`)};
    transition: 0.3s;
    padding-left: 200px;
`

const ThumbImage = styled.img`
    border: none;
    width: 400px;
    height: 400px;
    transition: 0.3s;
`

const ThumbItem = styled.div`
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
    & > div{
        display: block;
        width: 400px;
        & .description {
            color: #aaaaaa;
        }
        justify-content: center;
    }
`