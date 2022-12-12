import React, { useRef } from 'react';
import './SignUpScreen.css';
import { auth } from '../firebase';

const SignUpScreen = () => {
  //Chưa học useRef
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    // chặn hoạt động mặc định của trình duyệt
    e.preventDefault();
    // xác thực khi đăng ký
    auth
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    // xác thực khi đăng nhập
    auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1>Đăng nhập</h1>
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password"></input>
        <button type="submit" onClick={signIn}>
          Đăng nhập
        </button>

        <h5>
          <span className="signupScreen_gray">Bạn mới tham gia Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Đăng ký ngay.
          </span>
        </h5>
      </form>
    </div>
  );
};

export default SignUpScreen;
