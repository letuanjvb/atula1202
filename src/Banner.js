import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
import { useNavigate } from "react-router-dom";
import videoBg from './videos/Black-panther.mp4';

const Banner = () => {
  const history = useNavigate();
  //tạo một bộ phim
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNeflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  // function truncate(string, n) {
  //   return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  // }

  return (
    <header
      className="banner">
      <video src={videoBg} autoPlay loop muted/>
      <div className="banner_contents">
        <h1 className="banner_title">
          Black Panther 2
        </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => history("/player")}>Trailer
          </button>
          <button className="banner_button">Play</button>
        </div>
        <h1 className="banner_description">Nữ hoàng Ramonda, Shuri, M’Baku, Okoye và Dora Milaje chiến đấu để bảo vệ quốc gia của họ khỏi sự can thiệp của các thế lực thế giới sau cái chết của Vua T’Challa. Khi người Wakanda cố gắng nắm bắt chương tiếp theo của họ, các anh hùng phải hợp tác với nhau với sự giúp đỡ của War Dog Nakia và Everett Ross và tạo ra một con đường mới cho vương quốc Wakanda.
          {/* {truncate(''movie?.overview'', 150)} */}
          </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
