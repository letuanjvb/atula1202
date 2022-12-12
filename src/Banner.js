import axios from './axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from './Requests';
import { useNavigate } from 'react-router-dom';
// import videoBg from './videos/Avengers-banner.webm';
// import bannerImgHover from './images/banner.jpg';

const Banner = () => {
  const history = useNavigate();
  const [isShown, setIsShown] = useState(false);
  //tạo một bộ phim
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNeflixOriginal);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  // function truncate(string, n) {
  //   return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  // }

  return (
    <header className="banner">
      <video
        src={'https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/1080.mp4'}
        autoPlay
        loop
        muted
      />
      <div className="banner_contents">
        <h1 className="banner_title"> Avengers - Endgame </h1>
        <div className="banner_buttons">
          <button className="banner_button" onClick={() => history('/trailer')}>
            Trailer
          </button>
          <button className="banner_button" onClick={() => history('/player')}>
            Xem phim
          </button>
          <button
            className="banner_button"
            onClick={() => history('/filminfo')}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
            Thông tin khác
          </button>
          {isShown && (
            <div className="banner_button_hover">
              <h1>Avengers - Endgame</h1>
              <div>Thời lượng: 181 Phút</div>
              <div>Thể loại: Phim Hành Động, Phim Viễn Tưởng, Phim Phiêu Lưu, Phim Chiếu Rạp</div>
              <div>Điểm IMDb:8,7</div>
              <div>Năm Phát Hành: 2019</div>
              <div>Quốc gia: Phim Âu Mỹ</div>
              <div>Diễn viên:</div>
              <div>Đạo diễn:</div>
              {/* <img src={bannerImgHover} alt=""/> */}
            </div>
          )}
        </div>
        <h1 className="banner_description">
          Cú búng tay của Thanos đã khiến toàn bộ dân số biến mất một nửa. Các siêu anh hùng đánh
          mất bạn bè, người thân và đánh mất cả chính mình. Bộ sáu Avengers đầu tiên tứ tán. Iron
          Man kẹt lại ngoài không gian, Hawkeye mất tích. Thor, Captain America, Hulk và Black Widow
          đều chìm trong nỗi đau vô tận vì mất đi những người thân yêu. Họ phải làm gì để cứu vãn
          mọi chuyện ở Avengers: Hồi Kết?
          {/* {truncate(''movie?.overview'', 150)} */}
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
