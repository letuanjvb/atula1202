import React from 'react';
import Banner from '../../components/banner/banner';
import './homeScreen.css';
import Navside from '../../components/nav/navside';
import Footer from '../../components/footer/footer';
import Row from '../../components/row/row';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navside />
      <div className="bodyside">
        <Banner />
        <Row />
        <Footer />
      </div>
    </div>
  );
};

export default HomeScreen;
