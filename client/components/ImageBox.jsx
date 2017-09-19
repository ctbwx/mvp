import React from 'react';

const ImageBox = ({image}) => (
  <div className="imageBox">
    <img src={`${image}`} height="320" width="480"/>
  </div>
);

export default ImageBox;
