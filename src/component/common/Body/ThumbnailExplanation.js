import React from 'react';
import styled from 'styled-components';
import ThumbnailImg from '../../../assets/thumbnail.jpg'

// const tempArr = [
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     },
//     {
//         src: ThumbnailImg,
//         title: '제목',
//         description: 'tjfdwg'
//     }
// ]

const ThumbnailExplanation = () => {
    return (
        <Wrapper>
            <ThumbnailItem/>
            <ThumbnailItem/>
            <ThumbnailItem/>
            {/* <tempArr></tempArr> */} 
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