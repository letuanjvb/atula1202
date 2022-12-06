import React from "react";
import "../screens/LoginScreen.css";
import { useState } from "react";
import SignUpScreen from "./SignUpScreen";

const LoginSreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="https://assets.brand.microsites.netflix.io/assets/1561c76e-b389-11e7-9274-06c476b5c346_cm_800w.png?v=36"
          alt=""
        ></img>
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
          <SignUpScreen />
        ) : (
          <>
            <h1>
              Chương trình truyền hình, phim không giới hạn và nhiều nội dung
              khác.
            </h1>
            <h2>Xem ở mọi nơi. Hủy bất kỳ lúc nào.</h2>
            <h3>
              Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư
              cách thành viên của bạn.
            </h3>

            <div className="loginScreen_input">
              <form>
                <input type="email" placeholder="Địa chỉ Email"></input>
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  className="loginScreen_getStarted"
                >
                  Bắt đầu{" "}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSreen;
