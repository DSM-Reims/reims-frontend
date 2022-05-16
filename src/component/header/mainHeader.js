import React from 'react';
import style from 'styled-components';

const HeaderLeft = style.div`
    font: 'Noto Sans KR'
`
const mainHeader = () => {
    return (
        <div>
            <HeaderLeft>
                tprtm
            </HeaderLeft>
        </div>
    );
};

export default mainHeader;