import React, { useEffect } from 'react';
import './styles/App.css';
import HomeScreen from './pages/Home/HomeScreen';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSreen from './pages/loginPage/LoginSreen';
import { auth } from './config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './pages/profile/ProfileScreen';

import UserSetting from './pages/profile/ProfileSetting';
import DetailsMovie from './pages/Details/Details';
import Search from './pages/Search/Search';
import SearchResults from './pages/Search/SearchResults';
import WatchTv from './pages/Watch/Watch';
import WatchMovie from './pages/Watch/WatchMovie';

import ViewMorePage from './pages/ViewMore/ViewMorePage';

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
            email: userAuth.email
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
          <Route path="/watch/movie/:id" element={<WatchMovie />}></Route>
          <Route path="/usersetting" element={<UserSetting />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/results" element={<SearchResults />}></Route>
          <Route path="/:media_type/:type" element={<ViewMorePage />}></Route>
          <Route path="/details/:media_type/:id" element={<DetailsMovie />}></Route>
          <Route path="/watch/tv/:id/season/:season/esp/:esp" element={<WatchTv />}></Route>
          <Route path="/watch/movie/:id" element={<WatchMovie />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
