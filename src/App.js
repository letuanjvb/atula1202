import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSreen from "./screens/LoginSreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import Player from "./screens/Player";

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
      {/* bat buoc phai co tai khoan */}
      {!user ? (
        <LoginSreen />
      ) : (
        <Routes>
          <Route path="/profile" element={<ProfileScreen />}></Route>
          <Route path="/" element={<HomeScreen />}></Route>
          <Route path="/player" element={<Player />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
