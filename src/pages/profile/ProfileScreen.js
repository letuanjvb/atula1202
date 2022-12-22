import React from 'react';
import './ProfileScreen.css';
import Navside from '../../components/Nav/Navside';
import Footer from '../../components/Footer/Footer';
// import { auth } from '../Library/firebase';
import { useStore } from '../../stored';

const ProfileScreen = () => {
  const user = useStore((state) => state.user);
  // const { setLoading, loading } = useStore((state) => state);

  return (
    <div className="profileScreen">
      <Navside />
      <div className="bodyside">
        <div className="profileScreen_body">
          <h1>Hồ sơ cá nhân </h1>
          <div className="profileScreen_info">
            <div className="profileScreen_details">
              <h2>{user.email}</h2>
              <img alt="avatar" src={user.photoURL ? user?.photoURL : '/user-non-avatar.png'} />
              <h1>{user.displayName ? user?.displayName : 'default'}</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProfileScreen;
