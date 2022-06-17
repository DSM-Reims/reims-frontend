import React, { useState } from 'react'; 
import styled from 'styled-components';
import ThumbnailExplanation from './ThumbnailExplanation';
import { ReactComponent as LeftArrow } from '../../../assets/chevron-left-solid.svg'
import { ReactComponent as RightArrow } from '../../../assets/chevron-right-solid.svg'
import { tempArr } from './tempArr';

const Body = () => {
    const [position, setPosition] = useState(4);

    const imgWidth = 400    // 슬라이드 할 이미지의 가로 길이
    const slideGap = 30     // 각 슬라이드 사이의 간격
    const slideMovingUnit = imgWidth + slideGap     // 슬라이드 버튼 클릭 시 한 번에 넘어가는 길이

    const imgQuantity = tempArr.length - 1    // 총 이미지 수
    const slideWidth = imgWidth * imgQuantity + slideGap * (imgQuantity - 2)    // 슬라이드 내부 컨텐츠의 전체 길이
    const hiddenSlideWidth = (slideWidth - 3 * imgWidth - 2 * slideGap)     // 화면에 들어나지 않는 슬라이드의 길이
    let slideEnd;   

    const handlePrevBtn = () => {
        if (position < 0) {
            alert("더 이상 왼쪽으로 넘길 수 없습니다.")
        }
        else{
            setPosition(position - 1)
            console.log(position)
        }
    }

    const handleNextBtn = () => {
        if (position > tempArr.length) {
            
        }
    }
    
    return (
        <Wrapper>
            <RelativeContaienr>
                <ArrowContainer>
                    <LeftArrow onClick={handlePrevBtn} id='left-arrow' width='50px' height='50px' style={position === 0 ? {fill: 'gray'}:{fill: 'black}'}} />
                    <RightArrow onClick={} id='right-arrow' width='50px' height='50px' style={position === tempArr.length -1 ? {fill: 'gray'}:{fill: 'black}'}} />
                </ArrowContainer>
                <ThumbnailExplanation />
            </RelativeContaienr>
        </Wrapper>
    );
};

export default Body;

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px 80px;
`;

const RelativeContaienr = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    
`;

const ArrowContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
        #left-arrow{
            :hover{
                cursor: pointer;
            }
        }
        #right-arrow{
            :hover{
                cursor: pointer;
            }
        }
`;