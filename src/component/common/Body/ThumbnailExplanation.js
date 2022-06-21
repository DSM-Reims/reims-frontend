import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tempArr } from './tempArr';

const ThumbnailExplanation = ({ position }) => {
    return (
        <Wrapper>
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