import React, { useState } from 'react';
import styled from 'styled-components';
import ThumbnailExplanation from './ThumbnailExplanation';
import { ReactComponent as LeftArrow } from '../../../assets/chevron-left-solid.svg'
import { ReactComponent as RightArrow } from '../../../assets/chevron-right-solid.svg'

const Body = () => {
    const [callback, setCallback] = useState([]);

    return (
        <Wrapper>
            <div>
                <LeftArrow onClick={() => callback[0]()} id='left-arrow' width='50' height='50' />
                <ThumbnailExplanation setCallback={setCallback} />
                <RightArrow onClick={() => callback[1]()} id='right-arrow' width='50' height='50' />
            </div>
        </Wrapper>
    );
};

export default Body;

const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 0px 80px;
    & > div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
    }
`;