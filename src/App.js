import React, { useEffect } from "react";
import "./styles/App.css";
import HomeScreen from "./pages/Home/HomeScreen";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSreen from "./pages/loginPage/LoginSreen";
import { auth } from "./Library/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./pages/profile/ProfileScreen";
import Player from "./pages/player/Player";
import Trailer from "./pages/player/Trailer";
import FilmInfo from "./components/Movie/FilmInfo";
import SignUpScreen from "./components/LoginForm/SignUpScreen";
import UserSetting from "./pages/profile/ProfileSetting";

function App() {
  // đăng nhập r sẽ load về trang chủ
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // lưu thay đổi vào bộ nhớ cục bộ của trình duyệt
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //log in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //log out: lấy dữ liệu từ redux và xóa
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      {/* <HomeScreen /> */}
      {/* bat buoc phai co tai khoan, neu khong se back ve Login */}
      {!user ? (
        <LoginSreen />
      ) : (
        <Routes>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/player" element={<Player />}></Route>
          <Route path="/trailer" element={<Trailer />}></Route>
          <Route path="/filminfo" element={<FilmInfo />}></Route>
          <Route path="/signup" element={<SignUpScreen />}></Route>
          <Route path="/usersetting" element={<UserSetting />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
