import React from 'react';
import './loginScreen.css';
import { useState } from 'react';
import SignInScreen from '../../components/loginForm/signInScreen';
import Footer from '../../components/footer/footer';
import PC from '../../images/loginScreen_cardInfo_PC.webp';
import Down from '../../images/loginScreen_cardInfo_down.jpg';
import Money from '../../images/loginScreen_cardInfo_money.webp';
import logo from '../../images/logo.png';

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div>
      <div className="loginScreen">
        <div className="loginScreen_background">
          <img className="loginScreen_logo" src={logo} alt="" ></img>
          <button
            onClick={() => {
              setSignIn(true);
            }}
            className="loginScreen_button"
          >
            Đăng Nhập
          </button>

          <div className="loginScreen_gradient" />
        </div>

        <div className="loginScreen_body">
          {/* ấn chuyển màn hình sang đăng nhập */}
          {signIn ? (
            <SignInScreen />
          ) : (
            <>
              <div className='loginScreen_detail'>
                <h1>
                  Chương trình truyền hình, phim không giới hạn và nhiều nội
                  dung khác.
                </h1>
                <h2>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h2>
                <h3>
                  Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại
                  tư cách thành viên của bạn.
                </h3>
              </div>
              <div className="loginScreen_input">
                <form>
                  <input type="email" placeholder="Địa chỉ Email"></input>
                  <button
                    onClick={() => {
                      setSignIn(true);
                    }}
                    className="loginScreen_getStarted"
                  >
                    Bắt đầu{' '}
                  </button>
                </form>
                <button className="loginScreen_getStarted">
                  {' '}
                  Tài khoản khách
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="loginScreen_info">
        <div className="loginScreen_animationcard_container">
          <div className="loginScreen_animationcard_info">
            <h1>Thưởng thức trên PC của bạn.</h1>
            <h2>Xem trên Laptop, Máy tính bàn và nhiều thiết bị khác.</h2>
          </div>
          <div className="loginScreen_animationcard_videobg">
            <img src={PC} alt="" />
          </div>
        </div>
      </div>
      <div className="loginScreen_info">
        <div className="loginScreen_animationcard_container1">
          <div className="loginScreen_animationcard_videobg1">
            <img src={Down} alt="" />
          </div>
          <div className="loginScreen_animationcard_info1">
            <h1>Tải phim về với tốc độ cao.</h1>
            <h2>Băng thông lớn, tải phim nhanh với chất lương phim cao.</h2>
          </div>
        </div>
      </div>
      <div className="loginScreen_info">
        <div className="loginScreen_animationcard_container">
          <div className="loginScreen_animationcard_info">
            <h1>Tiền ít xem free, tiền không ít xem chất lượng cao.</h1>
            <h2>
              Bạn không có tài khoản? Bạn là sinh viên không có xèn? Bạn có thể
              xem phim chất lượng thấp hoàn toàn miễn phí. Bạn giàu, hãy mua VIP
              và xem phim với chất lượng Full HD 4k.
            </h2>
          </div>
          <div className="loginScreen_animationcard_videobg">
            <img src={Money} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginScreen;
