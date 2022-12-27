import React, { useEffect } from 'react';
import './styles/app.css';
import HomeScreen from './pages/home/homeScreen';
// eslint-disable-next-line no-unused-vars
import { Route, Routes, useLocation } from 'react-router-dom';
import LoginScreen from './pages/loginPage/loginSreen';
import { Auth } from './config/firebase';
import ProfileScreen from './pages/profile/profileScreen';
import Loading from './components/loading/loading';
import { useStore } from './stored';
import { useAuth, useLoginWithRedirect, ContextHolder } from '@frontegg/react';
import Watchplayer from './components/tv/watchplayer';

//pages

import UserSetting from './pages/profile/profileSetting';
import DetailsMovie from './pages/details/details';
import Search from './pages/search/search';
import SearchResults from './pages/search/searchResults';
import WatchTv from './pages/watch/watch';
import WatchMovie from './pages/watch/watchMovie';
import Player from './components/tv/player';
import Navside from './components/nav/navside';
import ViewMorePage from './pages/viewMore/viewMorePage';

function App() {
  // đăng nhập r sẽ load về trang chủ
  // const { setUser, user } = useStore((state) => state);
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  // useEffect(() => {
  //   // lưu thay đổi vào bộ nhớ cục bộ của trình duyệt
  //   const unsubscribe = Auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       //log in
  //       setUser(userAuth);
  //       return;
  //     }
  //     setUser(null);
  //     return () => {
  //       unsubscribe();
  //     };
  //   });

  //   return unsubscribe;
  // }, [setUser]);

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
      {/* {!user ? (
        <LoginScreen />
      ) : ( */}
      <Routes>
        <Route path="/profile" element={<ProfileScreen />}></Route>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/usersetting" element={<UserSetting />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/results" element={<SearchResults />}></Route>
        <Route path="/:media_type/:type" element={<ViewMorePage />}></Route>
        <Route
          path="/details/:media_type/:id"
          element={<DetailsMovie />}
        ></Route>
        <Route
          path="/watch/tv/:id/season/:season/esp/:esp"
          element={<WatchTv />}
        ></Route>
        <Route path="/watch/movie/:id" element={<WatchMovie />}></Route>
        <Route path="/player" element={<Player />}></Route>
        <Route path="/navside" element={<Navside />}></Route>
        <Route path="/watchplayer" element={<Watchplayer />}></Route>
      </Routes>
      {/* )} */}
    </div>
  );
}

export default App;
