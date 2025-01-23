import React from 'react';
import { CubeWrapper, Cube, Face } from './styles';

const DiceCube = () => {
  return (
    <CubeWrapper>
      <Cube>
        <Face className="front">Front</Face>
        <Face className="back">Back</Face>
        <Face className="right">Right</Face>
        <Face className="left">Left</Face>
        <Face className="top">Top</Face>
        <Face className="bottom">Bottom</Face>
      </Cube>
    </CubeWrapper>
  );
};

export default DiceCube; 