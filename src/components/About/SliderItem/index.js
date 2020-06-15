import React from 'react';
import './index.scss';

const SliderItem = ({ imgUrl, large, enlarge }) => {
  return (
    <div className="slide" onClick={() => enlarge(large)}>
      <img className="slide__img" src={imgUrl} alt="slider picture" />
    </div>
  );
};

export default SliderItem;