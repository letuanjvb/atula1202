import React from 'react';
import Banner from '../../components/banner/banner';
import './homeScreen.css';
import Navside from '../../components/nav/navSide';
import Footer from '../../components/footer/footer';
import Row from '../../components/row/row';
// import Title from '../../components/Shared/Title';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Navside />
      <div className="bodyside">
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

        <Row />

        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
