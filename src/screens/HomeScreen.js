import React from 'react';
import Banner from '../components/Banner/Banner.js';
import './HomeScreen.css';
import Nav from '../components/Header/Nav';
import requests from '../Library/Requests';
import Row from '../Row';
import Footer from '../components/Footer/Footer';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNeflixOriginal} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movied" fetchUrl={requests.fetchActionMovies} />
      <Row title="Conmedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
};

export default HomeScreen;
