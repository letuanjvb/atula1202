import React, { useMemo } from 'react';
import RecentlySlider from '../slider/recentlySlider';
import SliderMovie from '../slider/sliderMovie';
import SliderTv from '../slider/sliderTV';
import { getMovieHistory } from '../../utils/localStro';
// import Title from '../../components/Shared/Title';

const Row = () => {
  const historyWatch = useMemo(getMovieHistory, []);
  return (
    <div className="container">
      {historyWatch.length > 0 ? <RecentlySlider data={historyWatch} /> : null}
      <div className="movie">
        <SliderMovie type="trending" />
        <SliderMovie type="popular" />
        <SliderMovie type="top_rated" />
      </div>
      <div className="tv">
        <SliderTv type="trending" />
        <SliderTv type="popular" />
        <SliderTv type="top_rated" />
      </div>
    </div>
  );
};

export default Row;
