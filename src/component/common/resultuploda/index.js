import React from 'react';
import { FlexRow } from '../Flex';
import MainHeader from '../Header';
import ButtonContainer from '../Header/ButtonContainer';

const ResultUpload = ({ buttons = [] }) => {
  return (
      <div>
          <MainHeader />

            <FlexRow gap={10}>
              {buttons && (
                <>
                  {buttons.map((item) => (
                    <ButtonContainer
                      onClick={item.onClick}
                      btn={true}
                      color={item.color}
                      contents={item.text}
                    />
                  ))}
                </>
              )}
            </FlexRow>
      </div>
  );
};

export default ResultUpload;    