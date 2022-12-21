import React, { useRef } from 'react';
import { signInWithPopup } from 'firebase/auth';
import '../LoginForm/SignInScreen.css';
import { Auth } from '../../config/firebase';
import { auth, googleProvider } from '../../config/firebase';
import { addUser } from '../../actions/fireStoreActions';
// import { toast } from 'react-toastify';
import { useStore } from '../../stored';
import { useNavigate } from 'react-router-dom';

const SignInScreen = () => {
  const history = useNavigate();
  //Chưa học useRef
  const { setLoading, loading } = useStore((state) => state);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    // xác thực khi đăng nhập
    Auth.signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogin = async (Provider) => {
    setLoading(true);
    try {
      const { _tokenResponse, user } = await signInWithPopup(auth, Provider);
      const { displayName, email, photoURL, uid } = user;
      if (_tokenResponse.isNewUser) {
        await addUser({ displayName, email, photoURL, uid });
      }
      setLoading(false);
    } catch (error) {
      // toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Đăng nhập</h1>
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="Password" type="password"></input>
        <button type="submit" onClick={signIn}>
          Đăng nhập
        </button>

        <h5>
          <span className="signInScreen_gray">Bạn mới tham gia Netflix? </span>
          <span className="signupScreen_link" onClick={() => history('/signup')}>
            Đăng ký ngay.
          </span>
        </h5>

        <button
          className={`login-form-button login-form-google ${loading ? 'disableButton' : ''}`}
          onClick={() => handleLogin(googleProvider)}
          disabled={loading}>
          <box-icon name="google" type="logo" flip="vertical" color="#f7eeee"></box-icon>
          <span>Login with Google</span>
        </button>
      </form>
    </div>
  );
};

export default SignInScreen;
