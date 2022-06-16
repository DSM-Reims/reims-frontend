import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ThumbnailImg from '../../../assets/thumbnail.jpg'
import ThumbnailImg2 from '../../../assets/thumbnail2.jpg'
import ThumbnailImg3 from '../../../assets/thumbnail3.jpg'
import ThumbnailImg4 from '../../../assets/thumbnail4.jpg'
import ThumbnailImg5 from '../../../assets/thumbnail5.jpg'
import ResultVideo from '../../../assets/wedont.mp4'

const tempArr = [
    {
        "club_id": 0,
        "club_name": "영",
        "name": "성과전시회 관리 서비스",
        "simple": "어 간단 설명이야 ~",
        "description": "짜스 ~~",
        "thumbnail": ThumbnailImg,
        "video": ResultVideo,
        // rank - 0은 랭킹 이외 1 ~ 3 은 등수
        "rank": 0    
    },
    {
        "club_id": 1,
        "club_name": "일",
        "name": "성과전시회 관리 서비스",
        "simple": "어 간단 설명이야 ~",
        "description": "짜스 ~~",
        "thumbnail": ThumbnailImg2,
        "video": ResultVideo,
        // rank - 0은 랭킹 이외 1 ~ 3 은 등수
        "rank": 0    
    },
    {
        "club_id": 2,
        "club_name": "이",
        "name": "성과전시회 관리 서비스",
        "simple": "어 간단 설명이야 ~",
        "description": "짜스 ~~",
        "thumbnail": ThumbnailImg3,
        "video": ResultVideo,
        // rank - 0은 랭킹 이외 1 ~ 3 은 등수
        "rank": 0    
    },
    {
        "club_id": 3,
        "club_name": "삼",
        "name": "성과전시회 관리 서비스",
        "simple": "어 간단 설명이야 ~",
        "description": "짜스 ~~",
        "thumbnail": ThumbnailImg4,
        "video": ResultVideo,
        // rank - 0은 랭킹 이외 1 ~ 3 은 등수
        "rank": 0    
    },
    {
        "club_id": 4,
        "club_name": "사",
        "name": "성과전시회 관리 서비스",
        "simple": "어 간단 설명이야 ~",
        "description": "짜스 ~~",
        "thumbnail": ThumbnailImg5,
        "video": ResultVideo,
        // rank - 0은 랭킹 이외 1 ~ 3 은 등수
        "rank": 0    
    }
]

const ThumbnailExplanation = ({ position }) => {
    const imgWidth = '400px'    // 슬라이드 할 이미지의 가로 길이
    const slideGap = '30px'     // 각 슬라이드 사이의 간격
    const slideMovingUnit = imgWidth + slideGap     // 슬라이드 버튼 클릭 시 한 번에 넘어가는 길이

    const imgQuantity = position.length     // 총 이미지 수
    const slideWidth = imgWidth * imgQuantity + slideGap * (imgQuantity - 1)    // 슬라이드 내부 컨텐츠의 전체 길이
    const hiddenSlideWidth = (slideWidth - 3 * imgWidth - 2 * slideGap)     // 화면에 들어나지 않는 슬라이드의 길이
    let slideEnd;   

    const handlePrevBtn = () => {
        
    }

    return (
        <Wrapper>
            {
                tempArr.slice(0, 3).map((club_result, index) => <ThumbnailItem {...club_result} key={index} />)
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


export default ThumbnailExplanation;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
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