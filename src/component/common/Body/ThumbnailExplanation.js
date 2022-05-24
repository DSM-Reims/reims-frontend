import React from 'react';
import styled from 'styled-components';
import ThumbnailImg from '../../../assets/thumbnail.jpg'

const ThumbnailExplanation = () => {
    return (
        <Wrapper>
            <ThumbnailItem/>
            <ThumbnailItem/>
            <ThumbnailItem/>
        </Wrapper>
    );
};

const ThumbnailItem = ({ link, clubName }) => {
    return (
        <ThumbItem>
            <ThumbImage src={ThumbnailImg}></ThumbImage>
            <div>
                <div>SoulMate</div>
                <div className='description'>
                    영혼의 울림이 같은 세상에 단 하나뿐인 나의 ‘SoulMate’
                    예기치 못한 순간, 영혼의 단짝을 만나게 된다면 우리의 삶은 어떻게 변할까?
                    지코가 1년 만에 솔로 싱글 [SoulMate]를 발표한다.
                </div>
            </div>
        </ThumbItem>
    )
}

export default ThumbnailExplanation;

const Wrapper = styled.div`
    display: flex;
    gap: 0px 33px;
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