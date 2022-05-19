import React from 'react';
import styled from 'styled-components';
import ThumbnailImg from '../../../assets/thumbnail.jpg'

const Thumbnail = () => {
    return (
        <Wrapper>
            <SlideImage src={ThumbnailImg} />
            <SlideImage src={ThumbnailImg} />
            <SlideImage src={ThumbnailImg} />
        </Wrapper>
    );
};

export default Thumbnail;

const Wrapper = styled.div`
    display: flex;
    gap: 0px 33px;
`

const SlideImage = styled.img`
    border: none;
    width: 400px;
    height: 400px;
`