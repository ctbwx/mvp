import React from 'react';

const ImageBox = ({image}) => (
  !image ? <div className="imageBox">Please wait...</div> :
  <div className="imageBox">
    <img src={`${image}`} height="320" width="480"/>
  </div>
);

export default ImageBox;
