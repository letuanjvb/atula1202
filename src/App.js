import React, { useEffect } from 'react';
import './styles/App.css';
import HomeScreen from './pages/Home/HomeScreen';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginSreen from './pages/loginPage/LoginSreen';
import { Auth } from './config/firebase';

import ProfileScreen from './pages/profile/ProfileScreen';
import Loading from './components/Loading/Loading';

import { useStore } from './stored';

//pages

import UserSetting from './pages/profile/ProfileSetting';
import DetailsMovie from './pages/Details/Details';
import Search from './pages/Search/Search';
import SearchResults from './pages/Search/SearchResults';
import WatchTv from './pages/Watch/Watch';
import WatchMovie from './pages/Watch/WatchMovie';
import Player from './components/TV/Player';
import Navside from './components/Nav/Navside';

import ViewMorePage from './pages/ViewMore/ViewMorePage';

function App() {
  // đăng nhập r sẽ load về trang chủ
  const { setUser, user } = useStore((state) => state);
  const location = useLocation();

  useEffect(() => {
    // lưu thay đổi vào bộ nhớ cục bộ của trình duyệt
    const unsubscribe = Auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //log in
        setUser(userAuth);
        return;
      }
      setUser(null);
      return () => {
        unsubscribe();
      };
    });

    return unsubscribe;
  }, [setUser]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  if (typeof user === 'undefined') {
    return <Loading />;
  }

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
          <Route path="/player" element={<Player />}></Route>
          <Route path="/navside" element={<Navside />}></Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
