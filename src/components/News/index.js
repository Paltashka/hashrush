import React from 'react'
import './index.scss';

const News = () => {

  return (
    <div className="news">
      <div className="news__content container"> 
        <h1 className="news__heading heading">latest news</h1>
        {/* <div className="news__blocks">
          <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />
          <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />
          <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />
        </div> */}
      </div>
    </div>
  );
};

export default News;