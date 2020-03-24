import React from 'react';
import styled from 'styles/styled-components';
import { colors } from 'styles/vars';
import CircleLoader from 'react-spinners/CircleLoader';

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 1000;
`;

export default function LoadingOverlay() {
  return (
    <Overlay>
      <CircleLoader
        size={150}
        color={colors.blue}
        loading={true}
      />
    </Overlay>
  );
}
