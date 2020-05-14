import React from 'react'
import './index.scss';
import NewsBlock from './NewsBlock';
import platformHead from '../../assets/images/platform-head.png';

const News = () => {
  const date = '12 may 2020';
  const title = 'Hash Rush February Update';
  const text = 'The Hash Rush Lore Spotlight series returns. This week we are continuing with the topic of looking at the…';

  return (
    <div className="news">
      <div className="news__content container"> 
        <h1 className="news__heading heading">latest news</h1>
        <div className="news__blocks">
          <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />
          <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />
          <NewsBlock imgUrl={platformHead} date={date} title={title} text={text} />
        </div>
      </div>
    </div>
  );
};

export default News;