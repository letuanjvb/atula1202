import React from 'react';
import Banner from '../../components/Banner/banner';
import './homeScreen.css';
import Navside from '../../components/Nav/navSide';
import Footer from '../../components/Footer/footer';
import Row from '../../components/Row/row';

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
