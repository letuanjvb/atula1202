import axios from '../../library/axios';
import React, { useEffect, useState } from 'react';
import './Banner.css';
import requests from '../../library/Requests';
import { useNavigate } from 'react-router-dom';
import videoBg from '../../videos/Avengers-banner.webm';
import { GoMute } from 'react-icons/go';
import { ImLoop2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
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
      <video src={videoBg} autoPlay loop muted />
      <div className="banner_contents">
        <h1 className="banner_title"> Avengers - Endgame </h1>
        <div className="banner_buttons">
          <div className="banner_button_left">
            <Link className="banner_button" to={`/player`}>
              Trailer
            </Link>
            <Link className="banner_button" to={`/player`}>
              Xem phim
            </Link>
            <button
              className="banner_button1"
              onClick={() => history('/filminfo')}
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}>
              i
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
          <div className="banner_button_right">
            <ImLoop2 className="banner_button_right1" />
            <GoMute className="banner_button_right1" />
          </div>
          <div className="banner_gradient" />
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
