import React from 'react';
import './ProfileScreen.css';
import { useSelector } from 'react-redux';
import Nav from '../components/Header/Nav';
import { selectUser } from '../features/userSlice';
// import { auth } from '../Library/firebase';

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Hồ sơ cá nhân </h1>
        <div className="profileScreen_info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""></img>
          <div className="profileScreen_details">
            <h2>{user.email}</h2>
            <div className="profileScreen_plans">
              <h3>Gói hội viên</h3> <p>Thường</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
