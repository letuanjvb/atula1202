import React, { useMemo } from 'react';
import Banner from '../../components/Banner/Banner';
import './HomeScreen.css';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import RecentlySlider from '../../components/Slider/RecentlySlider';
import SliderMovie from '../../components/Slider/SliderMovie';
import SliderTv from '../../components/Slider/SliderTv';
import { getMovieHistory } from '../../utils/localStro';
// import Title from '../../components/Shared/Title';

const HomeScreen = () => {
  const historyWatch = useMemo(getMovieHistory, []);
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNeflixOriginal} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movied" fetchUrl={requests.fetchActionMovies} />
      <Row title="Conmedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}

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
      <Footer />
    </div>
  );
};

export default HomeScreen;
